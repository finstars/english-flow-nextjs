import Image from "next/image";
import styles from "./page.module.css";
import editions from "./editions";
import Edition from "../_components/Edition";

export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <div className={styles.intro}>
        <h1>Shadowing Lessons</h1>
        <p>Practice English using the shadowing technique.</p>
        <p>Recommended for beginners (A1-A2).</p>
      </div>

      <div className={styles.videoLessons}>
        {editions.map(({ title, lessons }, i) => (
          <Edition title={title} lessons={lessons} key={i} />
        ))}
      </div>
    </main>
  );
}
