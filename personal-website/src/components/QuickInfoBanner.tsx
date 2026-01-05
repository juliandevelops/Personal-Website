'use client';

import Link from 'next/link';
import styles from './QuickInfoBanner.module.scss';

export default function QuickInfoBanner({
    currentValue, setCallback
}: { currentValue?: boolean, setCallback: (value: boolean) => void }) {
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
                        <h3>Quick note</h3>
                        <p>
                            For professional topics, please visit my <Link href="https://juliandevelops.com">professional website</Link>.
                            <br />
                            If you want to know the person behind the work, you are in the right place.
                            <br />
                            Welcome and have a calm scroll.
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
