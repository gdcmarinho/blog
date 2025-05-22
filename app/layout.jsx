import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Gabriel Marinho'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased w-screen h-screen text-white bg-stone-900">
                <div className="flex flex-col w-full h-full grow">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
