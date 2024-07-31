"use client"

import React, { useState, useEffect } from "react";
import styles from "./LessonCard.module.css"
import Link from "next/link";

const LessonCard = ({ card, width, type }) => {
  const [locale, setLocale] = useState("")

  useEffect(() => {
    const locale = window.localStorage.getItem("locale")
    if (locale) setLocale(locale)
  }, [])

  return (
    <div className={styles.cards}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}>
        {card.conversation &&
          <div className={styles.content}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.conversation}>
              {card.conversation.map((c, i) => (
                <div>{c.text}</div>
              ))}
            </div>

            <div className={styles.conversationTranslated}>
              {card.conversation.map((c, i) => (
                <div>{c.translations[locale]}</div>
              ))}
            </div>
          </div>
        }

        {card.text &&
          <div className={`${styles.content} ${type === 'tprs' ? styles.contentTprs : ''}`}>

            {card.title && <div className={styles.title}>{card.title}</div>}

            <h1>{card.text}</h1>
            <p>{card.translations[locale]}</p>
          </div>
        }

        <div className={styles.progressContainer}>
          <div className={styles.step} style={{ width }}></div>
        </div>
      </div>
    </div>
  )
}

export default LessonCard