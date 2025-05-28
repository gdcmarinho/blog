import Link from 'next/link'

export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="flex items-center w-full mx-auto max-w-screen-sm justify-between p-4 mb-11 text-white">
            <p className="text-sm">© {currentYear} Gabriel Marinho</p>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/privacy" className="hover:underline">privacy policy</Link></li>
                </ul>
            </nav>
        </footer>
    );
}
