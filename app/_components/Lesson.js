"use client"

import React, { useState, useEffect } from "react";
import styles from "./Lesson.module.css"
import Link from "next/link";

const Lesson = ({ backgroundImage, title, path, translation }) => (
  <Link href={path} className={styles.groupLesson} style={{ backgroundImage }}>
    <span className={styles.lightning}>
      <span className={styles.noisy}>
        {title}
      </span>
    </span>

    <span className={styles.translation}>
      {translation}
    </span>

    <div className={styles.lessonCompleted}>
      <span>Completed</span>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" xmlSpace="preserve">
        <path fill="#38a438" d="M126.5,10C62.8,10,10,62.8,10,129.5C10,193.2,62.8,246,126.5,246c66.6,0,119.5-52.8,119.5-116.5 C246,62.8,193.2,10,126.5,10z M193.8,93.3l-83.9,82.6c-0.5,0.5-1.3,0.5-1.8,0l-38.7-40c-0.5-0.5-0.5-1.4-0.1-1.9l5.3-7.2 c0.4-0.6,1.2-0.7,1.7-0.3c0,0,0,0,0,0l31.6,24.2c0.6,0.4,1.4,0.4,2,0l76.9-64.1c0.6-0.4,1.3-0.4,1.9,0.1l5,5 C194.3,92,194.3,92.8,193.8,93.3C193.8,93.3,193.8,93.3,193.8,93.3L193.8,93.3z" />
      </svg>
    </div>
  </Link>
)

export default Lesson