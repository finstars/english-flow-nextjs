import Image from "next/image";
import styles from "./page.module.css";
import Edition from "../_components/Edition";
import { storageUrl } from "../_utils/constants";

export default async function Home() {
  const { edition } = await getData()

  return (
    <main id="main" className={styles.main}>
      <div className={styles.intro}>
        <h1>TPR Storytelling English Lessons</h1>
        <p>Practice English using TPR & TPRS methodology.</p>
        <p>Recommended for advanced (C1-C2).</p>
      </div>

      <div className={styles.videoLessons}>
        {edition.map(({ title, lessons }, i) => (
          <Edition title={title} lessons={lessons} key={i} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch(`${storageUrl}/editions/tprs.json`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}