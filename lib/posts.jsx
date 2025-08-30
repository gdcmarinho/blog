import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getAllPosts() {
    const dirents = await fs.readdir(postsDirectory, { withFileTypes: true });
    const fileNames = dirents.filter((d) => d.isFile() && /\.mdx?$/i.test(d.name)).map((d) => d.name);

    if (fileNames.length === 0) return [];

    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const filePath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContents);
            return { id: fileName.replace(/\.mdx?$/, ''), ...data };
        })
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id) {
    const fullPathMd = path.join(postsDirectory, `${id}.md`);
    const fullPathMdx = path.join(postsDirectory, `${id}.mdx`);
    let fileContents;

    try {
        fileContents = await fs.readFile(fullPathMd, 'utf8');
    } catch (err) {
        try {
            fileContents = await fs.readFile(fullPathMdx, 'utf8');
        } catch (error) {
            throw new Error(`Post with id "${id}" not found.`);
        }
    }

    const matterResult = matter(fileContents);

    return {
        id,
        content: matterResult.content,
        ...matterResult.data
    };
}
