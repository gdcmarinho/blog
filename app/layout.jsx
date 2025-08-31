import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s',
        default: 'Gabriel Marinho'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="antialiased w-screen h-screen text-white bg-black text-[#a1a1a1] overflow-hidden">
                <div className="flex flex-col w-full h-full overflow-y-auto custom-scrollbar">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
