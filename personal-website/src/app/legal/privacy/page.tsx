import Link from "next/link"
import styles from "./page.module.scss"
import { resetConsent } from "@/objects/cookieStore";
import ResetCookieButton from "@/components/ResetCookieButton";

export const metadata = {
    title: "Privacy — Julian Schumacher",
    description: "How julianschumacher.dev handles data: cookies, hosting, analytics, and your rights.",
};

export default function Privacy() {

    const handleResetClick = async () => {
        "use server";
        await resetConsent();
    }

    return (
        <main className={styles.main}>
            <h1>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: November 1, 2026</p>

            <h2 className={styles.heading}>Who is responsible</h2>
            <p>
                The controller within the meaning of Art. 4 (7) GDPR is:
            </p>
            <p className={styles.address}>
                Julian Schumacher<br />
                Herrenberger Straße 72<br />
                71069 Sindelfingen<br />
                Germany<br />
                Email: <a href="mailto:support@julianschumacher.dev">support@julianschumacher.dev</a>
            </p>
            <p>
                The full address is also in the <Link href="/legal/imprint">imprint</Link>.
            </p>

            <h2 className={styles.heading}>Hosting and server log files</h2>
            <p>
                This website is hosted by <a href="https://vercel.com">Vercel Inc.</a> (USA).
                When you visit the site, Vercel automatically records server log files —
                including your IP address, the date and time of the request, the requested
                URL, the referrer and your browser&rsquo;s user agent string.
            </p>
            <p>
                This data is used exclusively to operate and secure the website (for example
                to detect abuse or outages) and is only kept for a short period, as described
                in <a href="https://vercel.com/docs/observability/logs">Vercel&rsquo;s log documentation</a>.
                The legal basis is Art. 6 (1) (f) GDPR (legitimate interest in a secure and
                stable operation). Vercel processes this data on my behalf under a{" "}
                <a href="https://vercel.com/legal/dpa">Data Processing Agreement</a>; transfers
                to the USA are based on the EU Standard Contractual Clauses. Details are in the{" "}
                <a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a>.
            </p>

            <h2 className={styles.heading}>Cookies</h2>
            <p>
                This website sets exactly one cookie, and it is technically necessary:
            </p>
            <table className={styles.cookieTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Purpose</th>
                        <th>Storage duration</th>
                        <th>Legal basis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>cookieConsent</code></td>
                        <td>Stores your cookie choice (&ldquo;essential&rdquo; or &ldquo;all&rdquo;) so this banner does not reappear on every visit.</td>
                        <td>180 days</td>
                        <td>§ 25 (2) TDDDG (technically necessary), Art. 6 (1) (f) GDPR</td>
                    </tr>
                </tbody>
            </table>
            <p>
                No marketing, advertising or cross-site tracking cookies are set. You can delete
                the cookie at any time using the button at the bottom of this page or in your
                browser settings — the banner will then simply appear again.
            </p>

            <h2 className={styles.heading}>Speed Insights (only with your consent)</h2>
            <p>
                Only if you click &ldquo;Accept all&rdquo; in the cookie banner, this website loads{" "}
                <a href="https://vercel.com/docs/speed-insights">Vercel Speed Insights</a>.
                It measures page views and performance (Core Web Vitals) and sends the visited
                page URL, the referrer, browser and device type, and the performance metrics to
                Vercel Inc. (USA). No IP address is stored for this.
            </p>
            <p>
                The legal basis is your consent, Art. 6 (1) (a) GDPR, which you can withdraw at
                any time with effect for the future — via &ldquo;Cookie settings&rdquo; in the footer
                or the reset button below. Processing by Vercel is based on the Data Processing
                Agreement and the EU Standard Contractual Clauses linked above.
            </p>

            <h2 className={styles.heading}>Fonts</h2>
            <p>
                The fonts (IBM Plex Serif and IBM Plex Sans) are self-hosted via{" "}
                <code>next/font</code> and are served from this website, not from Google.
                No connection to Google servers is made at runtime.
            </p>

            <h2 className={styles.heading}>Contacting me by email</h2>
            <p>
                If you send me an email, I process the data you provide (such as your name,
                email address and message) solely to answer your request. Legal basis:
                Art. 6 (1) (b) or (f) GDPR. The data is deleted once your request has been
                fully resolved, unless legal retention obligations require longer storage.
                It is not passed on to third parties.
            </p>

            <h2 className={styles.heading}>External links</h2>
            <p>
                Links to external sites (GitHub, Instagram, X, TikTok, juliandevelops.com, ...)
                lead to providers over which I have no control. Their own privacy policies
                apply there.
            </p>

            <h2 className={styles.heading}>Your rights</h2>
            <p>You have the following rights regarding your personal data (Art. 15–21 GDPR):</p>
            <ul className={styles.list}>
                <li>Right of access (Art. 15)</li>
                <li>Right to rectification (Art. 16)</li>
                <li>Right to erasure (Art. 17)</li>
                <li>Right to restriction of processing (Art. 18)</li>
                <li>Right to data portability (Art. 20)</li>
                <li>Right to object (Art. 21)</li>
            </ul>
            <p>
                If you have given consent (for example for Speed Insights), you can withdraw it
                at any time with effect for the future, using the reset button below. To exercise
                any of your rights, just send an email to{" "}
                <a href="mailto:support@julianschumacher.dev">support@julianschumacher.dev</a>.
            </p>

            <h2 className={styles.heading}>Right to lodge a complaint</h2>
            <p>
                Without prejudice to any other administrative or judicial remedy, you have the
                right to lodge a complaint with a data protection supervisory authority — in
                particular in the EU member state of your habitual residence — if you believe
                that the processing of your personal data violates the GDPR (Art. 77 GDPR).
            </p>

            <h2 className={styles.heading}>Data security</h2>
            <p>
                This website is served exclusively over HTTPS (TLS encryption provided by Vercel).
            </p>

            <h2 className={styles.heading}>Changes to this policy</h2>
            <p>
                I may update this privacy policy from time to time. The date at the top of this
                page always shows the current version.
            </p>

            <h1>Apps</h1>
            <h2 className={styles.heading}>General</h2>
            <p>
                My apps do not send any data to the internet and do not retrieve any either.
                They only access data that you — the user — provided and entered in the app.
                If the data is sensitive, it is stored encrypted on your device.
            </p>
            <p>
                The controller for the apps is the same as for this website (see above), and
                the rights described above apply to the apps as well.
            </p>
            <h2 className={styles.heading}>Flutter</h2>
            <p>
                Some of my apps are built with <a href="https://dart.dev">Google&rsquo;s language Dart</a> and
                the corresponding <a href="https://flutter.dev">Flutter framework</a>. Because Flutter
                and Dart are community-driven, not every line of code in an app is written by me —
                the packages can be found on <a href="https://pub.dev">pub.dev</a>. Google reviews
                the packages, but I cannot guarantee that every package is 100% secure and bug-free.
                I do my best to remove packages that are unnecessary, suspicious or not working.
                For the packages used in a specific app, see its GitHub repository, usually linked
                in the store listing or the app itself; if you can&rsquo;t find it, you can{" "}
                <a href="https://github.com/Julessh05?tab=repositories">search here</a>.
            </p>
            <h2 className={styles.heading}>Swift and iCloud</h2>
            <p>
                My Swift and SwiftUI apps — most of my more recent ones — are built with Apple&rsquo;s
                native language and may store their data encrypted and sync it to your personal
                iCloud. That sync is handled by Apple under{" "}
                <a href="https://www.apple.com/legal/privacy/">Apple&rsquo;s privacy policy</a>; the synced
                data is not visible or accessible to anyone but you, including me.
                To learn more about storage and security in a specific app, see the project&rsquo;s
                page — all projects can be found <Link href="/">here</Link>.
            </p>

            <section id="cookie-settings" className={styles.cookieSettings}>
                <h2>Cookie settings</h2>
                <p>
                    This deletes the stored cookie choice, so the banner appears again on your
                    next visit and you can change your selection.
                </p>
                <ResetCookieButton callback={handleResetClick} />
            </section>
        </main>

    )
}
