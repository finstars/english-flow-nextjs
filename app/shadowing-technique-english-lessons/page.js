import Image from "next/image";
import styles from "./page.module.css";
import Edition from "../_components/Edition";
import { storageUrl } from "../_utils/constants";
import Preferences from "../_components/Preferences";

export const metadata = {
  title: 'Shadowing English Lessons',
  description: 'Practice English using the shadowing technique. Recommended for beginners (A1-A2).',
}

export default async function Home() {
  const { edition } = await getData()

  return (
    <main id="main" className={styles.main}>
      <div className={styles.intro}>
        <h1>Shadowing English Lessons</h1>
        <p>Practice English using the shadowing technique.</p>
        <p>Recommended for beginners (A1-A2).</p>
      </div>

      <Preferences />

      <div className={styles.videoLessons}>
        {edition.map(({ title, lessons }, i) => (
          <Edition title={title} lessons={lessons} key={i} backgroundImage={`linear-gradient(109.6deg, rgb(255, 194, 48) 11.2%, rgb(255, 124, 0) 100.2%)`} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch(`${storageUrl}/editions/shadowing.json`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}