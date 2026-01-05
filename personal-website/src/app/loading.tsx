import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}></div>
          <div className={styles.title}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.lineShort}></div>
          <div className={styles.actions}>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.buttonGhost}></div>
          </div>
          <div className={styles.pills}>
            <div className={styles.pill}></div>
            <div className={styles.pill}></div>
            <div className={styles.pill}></div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.portrait}></div>
          <div className={styles.note}></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.lineShort}></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}></div>
        <div className={styles.cardGrid}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}></div>
        <div className={styles.cardGrid}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </section>
    </main>
  );
}
