import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { languages } from "./_utils/constants";

export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <img src="/intro2.jpg" alt="English Flow - Learn spoken English by yourself" />
          <h1>Learn spoken English by yourself</h1>
          <h3>3 types of self-paced English lessons.</h3>
          <h3>Highly effective for absorbing the flow of English.</h3>

          <div className={styles.translations}>
            <h4>Translations available in:</h4>
            <div className={styles.translationsList}>
              {languages.filter(i => i.name != 'English').map((lang, i) => (
                <div key={i}>
                  {lang.name}

                  {lang.name === 'Somali' && <span className="em em-flag-so"></span>}
                </div>
              ))}
            </div>
          </div>


          <h2 className={styles.headlineTwo}>3 Types of English Lessons</h2>

          <div className={styles.types}>
            <div className={styles.type}>
              <img src="/shadowing.jpg" alt="English Flow - Shadowing Technique" />

              <h5>Beginners</h5>
              <h2>Shadowing Technique</h2>
              <p>A language learning technique where you repeat an audio just after you hear it.</p>
              <Link href={"/shadowing-technique-english-lessons"}>All Shadowing Lessons</Link>
            </div>

            <div className={styles.type}>
              <img src="/conversational.jpg" alt="English Flow - Conversational English" />

              <h5>Intermediate</h5>
              <h2>Conversational English</h2>
              <p>Imitate the way you would have a real English conversation in the real world.</p>
              <Link href={"/shadowing-technique-english-lessons"}>All Conversational Lessons</Link>
            </div>

            <div className={styles.type}>
              <img src="/tprs.jpg" alt="English Flow - TPR Storytelling" />

              <h5>Advanced</h5>
              <h2>TPR Storytelling</h2>
              <p>Listen to more complex stories and then retell the story in your own words.</p>
              <Link href={"/shadowing-technique-english-lessons"}>All TPRS Lessons</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
