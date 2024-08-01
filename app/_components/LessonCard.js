"use client"

import React, { useState, useEffect } from "react";
import styles from "./LessonCard.module.css"
import Link from "next/link";

const LessonCard = ({ card, width, type }) => {
  const [showTranslations, setShowTranslations] = useState(false)
  const [translations, setTranslations] = useState("")

  useEffect(() => {
    const translations = window.localStorage.getItem("translations")
    if (translations) setTranslations(translations)
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
                <div key={i}>{c.text}</div>
              ))}
            </div>

            {showTranslations &&
              <div className={styles.ctDrop}>
                <div className={styles.conversationTranslated}>
                  {card.conversation.map((c, i) => (
                    <div key={i}>{c.translations[translations]}</div>
                  ))}
                </div>
              </div>
            }
          </div>
        }

        {card.text &&
          <div className={`${styles.content} ${type === 'tprs' ? styles.contentTprs : ''}`}>

            {card.title && <div className={styles.title}>{card.title}</div>}

            <h1>{card.text}</h1>

            {showTranslations &&
              <div className={styles.ctDrop}>
                <p>{card.translations[translations]}</p>
              </div>
            }
          </div>
        }

        {translations && translations !== "No" &&
          <button onClick={() => setShowTranslations(p => !p)} className={styles.ctToggle}>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M39,18.67H35.42l-4.2,11.12A29,29,0,0,1,20.6,24.91a28.76,28.76,0,0,0,7.11-14.49h5.21a2,2,0,0,0,0-4H19.67V2a2,2,0,1,0-4,0V6.42H2.41a2,2,0,0,0,0,4H7.63a28.73,28.73,0,0,0,7.1,14.49A29.51,29.51,0,0,1,3.27,30a2,2,0,0,0,.43,4,1.61,1.61,0,0,0,.44-.05,32.56,32.56,0,0,0,13.53-6.25,32,32,0,0,0,12.13,5.9L22.83,52H28l2.7-7.76H43.64L46.37,52h5.22Zm-15.3-8.25a23.76,23.76,0,0,1-6,11.86,23.71,23.71,0,0,1-6-11.86Zm8.68,29.15,4.83-13.83L42,39.57Z" /></svg>
          </button>
        }

        <div className={styles.progressContainer}>
          <div className={styles.step} style={{ width }}></div>
        </div>
      </div>
    </div>
  )
}

export default LessonCard