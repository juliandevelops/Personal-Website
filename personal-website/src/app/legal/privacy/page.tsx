import Link from "next/link"
import styles from "./page.module.scss"
import { deleteBannerCookie } from "@/objects/cookieStore";
import ResetCookieButton from "@/components/ResetCookieButton";

export default function Privacy() {

    const handleResetClick = async () => {
        "use server";
        await deleteBannerCookie();
    }

    return (
        <main className={styles.main}>
            <h1> Website </h1>
            <h2 className={styles.heading}> General </h2>
            <p>
                This Website uses cookies to store information like the disabled information banner.
                No personal or sensitive information is being stored in these cookies. Furthermore, no tracking is implemented via these cookies.
                You can disable cookies in your browser settings, but that may lead to
                reduced functionality of this Website.
                You can delete the cookie for the information banner
                by clicking the &ldquo;Reset Banner&rdquo; button at the bottom of the page.
            </p>
            <h2 className={styles.heading}> Hosting and Provider </h2>
            <p>
                Adding to that, the Hoster of the Website and / or provider may record data.
                Those privacy policies can be found here:
            </p>
            <ul className={styles.webPrivacyList}>
                <li>
                    <a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a>
                </li>
                <li>
                    <a href="https://www.strato.de/datenschutz/">Strato Privacy Policy</a>
                </li>
            </ul>
            <h1> Apps </h1>
            <h2 className={styles.heading}> General </h2>
            <p>
                Currently, my Apps do not send any Data to the Internet
                and do also not retrieve them.
                The Apps only access data you - the User - provided and
                entered in the App.
                If the Data are sensitive, they are encrypted.
            </p>
            <h2 className={styles.heading}> Flutter Specific </h2>
            <p>
                For some of my Apps i use <a href="https://dart.dev">Googles Language Dart</a> and the corresponding <a
                    href="https://flutter.dev">Framework Flutter</a>.
                You can find more about these languages on the linked Sites.
                Because Flutter and Dart are based on the community and packages / plugins
                developed by the community, not every code, that is used in my App
                is written by me.
                All the Packages can be found <a href="https://pub.dev">here</a>.
                Google check&rsquo;s the Packages, but i cannot garantee that these Packages are
                100% secure and bug-free.
                Although i will do my best to remove packages that aren&rsquo;t necessary, suspicious or
                not working.
                To see more information about the packages used in an individual App,
                please refer to the Github repository of this App, mostly linked in the Store or
                the App itself.
                If you do not find the link, you can <a href="https://github.com/Julessh05?tab=repositories">search
                    here</a>.
            </p>
            <h2 className={styles.heading}> Swift Specific </h2>
            <p>
                My Swift and SwiftUI Apps - most of my more recent Apps,
                are being build usind Apple&rsquo;s own native system language, which
                provides me access to system level functions and especially native functions.
                These Apps may store their Data encrypted and may sync it to your personal iCloud.
                These synced Data are not visible or accessible for anyone but yourself.
                To read more about storing and security, please refer to the projects own
                page, all Projects can be found <Link href="/">here</Link>.
            </p>
            <section>
                <h2>Reset cookies</h2>
                <ResetCookieButton callback={handleResetClick} />
            </section>
        </main>

    )
}
