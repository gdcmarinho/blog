import Link from 'next/link';

export function Header() {
    return (
        <header className="flex items-center w-full mx-auto max-w-screen-sm justify-between mt-15 mb-15 text-white">
            <div>
                <h1 className="text-2xl font-bold select-none">
                    <Link href="/">Gabriel Marinho</Link>
                </h1>
                <h3 className="text-[#a1a1a1]">Software Engineer</h3>
            </div>
            <nav>
                <ul className="flex space-x-2">
                    <li>
                        <Link href="/blog" className="hover:underline">
                            posts
                        </Link>
                    </li>
                    <li className="select-none">/</li>
                    <li>
                        <Link href="/GabrielMarinho_CV.pdf" className="hover:underline">
                            curriculum
                        </Link>
                    </li>
                    <li className="select-none">/</li>
                    <li>
                        <Link href="/contact" className="hover:underline">
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
