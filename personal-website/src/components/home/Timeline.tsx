import React from "react";
import styles from "./Timeline.module.scss";

type TimelineItem = {
  label: string;
  description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <span>{item.label}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
