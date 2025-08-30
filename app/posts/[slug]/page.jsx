import Markdown from 'markdown-to-jsx';

import { getAllPosts, getPostData } from '../../../lib/posts';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.id
    }));
}

export default async function Post({ params }) {
    const { slug } = params;
    const postData = await getPostData(slug);

    return (
        <article className="w-full mx-auto max-w-screen-sm text-[#a1a1a1]">
            <h1 className="text-3xl font-bold text-white">{postData.title}</h1>
            <p className="mb-5">
                <small>Posted on {postData.date}</small>
            </p>

            {}
            <Markdown>{postData.content}</Markdown>
        </article>
    );
}
