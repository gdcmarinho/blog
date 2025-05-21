export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold logo"><a href="/">Gabriel Marinho</a></h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/blog" className="hover:underline">blog</a></li>
                    <li>/</li>
                    <li><a href="/work" className="hover:underline">work</a></li>
                    <li>/</li>
                    <li><a href="/contact" className="hover:underline">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}