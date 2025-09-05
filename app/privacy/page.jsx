import Link from 'next/link';

export default async function PrivacyPage() {
    return (
        <div className="w-full mx-auto max-w-screen-sm text-[#a1a1a1]">
            <p>Effective Date: September 5, 2025</p>
            <br />
            <p>This privacy policy outlines how data is handled for the website www.gabrielmarinho.org.</p>
            <br />
            <h2 className="text-l font-bold">Information I Do Not Collect</h2>
            <p>
                I, the owner and operator of this website, do not personally collect, store, share, or process any
                personal data from visitors. I do not use cookies, tracking scripts, or analytics tools that would
                identify you.
            </p>
            <br />
            <h2 className="text-l font-bold">Information Collected by Our Hosting Provider (GitHub Pages)</h2>
            <p>
                This website is hosted by GitHub Pages. For the service to function and for security purposes, GitHub
                may collect certain data from visitors. As of the effective date of this policy, this is the information
                GitHub collects from visitors to a GitHub Pages site:
            </p>
            <br />
            <ul className="list-disc list-inside my-2">
                <li>
                    <b>Visitor's IP address:</b> To serve the content and for security logging.
                </li>
                <li>
                    <b>User-Agent string:</b> Information about the visitor's browser and operating system, used for
                    compatibility and security.
                </li>
                <li>
                    <b>The requested URL and the time of the request:</b> Standard web server logs.
                </li>
                <li>
                    <b>Referrer URL:</b> The URL of the page that referred the visitor to the GitHub Pages site.
                </li>
            </ul>
            <br />

            <p>
                This data is collected by GitHub for legitimate interests, such as operating the service, maintaining
                security, and preventing abuse. I do not have direct access to this raw log data. For more details,
                please refer to the{' '}
                <Link href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
                    GitHub Privacy Statement
                </Link>
                .
            </p>
            <br />
            <h2 className="text-l font-bold">Links to Other Websites</h2>
            <p>
                My website may contain links to other websites that are not operated by me. If you click on a
                third-party link, you will be directed to that third party's site. I have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <br />
            <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <Link href="mailto:privacy@gabrielmarinho.org">
                    <b>privacy@gabrielmarinho.org</b>
                </Link>
                .
            </p>
        </div>
    );
}
