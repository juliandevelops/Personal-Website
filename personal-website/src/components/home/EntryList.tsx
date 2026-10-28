import React from "react";
import styles from "./EntryList.module.scss";

export type EntryItem = {
  term: string;
  description: React.ReactNode;
};

export default function EntryList({ items }: { items: EntryItem[] }) {
  return (
    <dl className={styles.list}>
      {items.map((item, index) => (
        <div key={item.term} className={styles.item}>
          <dt className={styles.term}>
            <span className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {item.term}
          </dt>
          <dd className={styles.description}>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
