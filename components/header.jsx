import Link from 'next/link'

export function Header() {
    return (
        <header className="flex items-center w-full mx-auto max-w-screen-sm justify-between mt-5 mb-15 text-white">
            <h1 className="text-2xl font-bold select-none"><Link href="/">Gabriel Marinho</Link></h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/blog" className="hover:underline">posts</Link></li>
                    <li className='select-none'>/</li>
                    <li><Link href="/work" className="hover:underline">curriculum</Link></li>
                    <li className='select-none'>/</li>
                    <li><Link href="/contact" className="hover:underline">contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}