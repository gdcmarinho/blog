export function Footer() {
    return (
        <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <p className="text-sm">© 2025 Gabriel Marinho</p>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/privacy" className="hover:underline">privacy policy</Link></li>
                    <li><Link href="/tos" className="hover:underline">tos</Link></li>
                </ul>
            </nav>
        </footer>
    );
}