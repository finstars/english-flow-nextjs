"use client"

import React, { useState, useEffect } from "react";
import styles from "./LessonCard.module.css"
import Link from "next/link";

const LessonCard = ({ card, width }) => {
  const [translation, setTranslation] = useState("")

  useEffect(() => {
    const locale = window.localStorage.getItem("locale")

    if (locale && card.translations[locale]) {
      setTranslation(card.translations[locale])
    }
  }, [])

  return (
    <div className={styles.cards}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>{card.text}</h1>
          <p>{translation}</p>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.step} style={{ width }}></div>
        </div>
      </div>
    </div>
  )
}

export default LessonCard