import Image from "next/image";
import styles from "./page.module.css";
import Edition from "../_components/Edition";
import { storageUrl } from "../_utils/constants";
import Preferences from "../_components/Preferences";

export const metadata = {
  title: 'Conversational English Lessons',
  description: 'Practice English using real-life English conversations. Recommended for intermediate (B1-B2).',
}

export default async function Home() {
  const { edition } = await getData()

  return (
    <main id="main" className={styles.main}>
      <div className={styles.intro}>
        <h1>Conversational English Lessons</h1>
        <p>Practice English using real-life English conversations.</p>
        <p>Recommended for intermediate (B1-B2).</p>
      </div>

      <Preferences />

      <div className={styles.videoLessons}>
        {edition.map(({ title, lessons }, i) => (
          <Edition title={title} lessons={lessons} key={i} backgroundImage={`linear-gradient(115.7deg, rgb(3, 79, 135) 6.2%, rgb(0, 184, 214) 112.9%)`} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch(`${storageUrl}/editions/conversational.json`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}