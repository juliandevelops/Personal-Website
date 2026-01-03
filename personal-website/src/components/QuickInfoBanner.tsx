'use client';

import Link from 'next/link';
import styles from './QuickInfoBanner.module.scss';

export default function QuickInfoBanner({
    currentValue, setCallback
}: { currentValue?: boolean, setCallback: (value: boolean) => void }) {
    console.log(`QuickInfoBanner rendered with currentValue: ${currentValue}`);
    if (currentValue) {
        return (
            <button
                className={styles.infoButton}
                onClick={() => setCallback(false)}
                aria-label="Show information banner"
                title="Show quick information"
            >
                i
            </button>
        );
    }

    return (
        <>
            {!currentValue && (
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h3>Quick Information</h3>
                        <p>
                            If you&rsquo;re looking to connect in a professional matter, please refer to my <Link href="https://juliandevelops.com">professional website</Link>.
                            <br />
                            If you want to get to know me personally - or you already do - you&rsquo;re welcome to stay here and browse a bit.
                            <br />
                            Welcome!
                        </p>
                    </div>
                    <button
                        className={styles.closeButton}
                        onClick={() => setCallback(true)}
                        aria-label="Close banner"
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
}
