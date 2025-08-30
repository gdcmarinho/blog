import Link from 'next/link';

import { getAllPosts } from '../../lib/posts';

export default async function PostsIndex() {
    const allPostsData = await getAllPosts();
    return (
        <div className="w-full mx-auto max-w-screen-sm text-[#a1a1a1]">
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id} className="cursor-pointer">
                        <Link href={`/posts/${id}`}>
                            <span className="text-lg font-semibold text-white">{title}</span>
                        </Link>
                        <br />
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
