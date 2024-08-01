"use client"

import React, { useState, useEffect, useRef } from "react";
import Lesson from "./Lesson";
import styles from "./Edition.module.css"

const Edition = ({ title, lessons, backgroundImage }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [locale, setLocale] = useState(null)
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const localLocale = window.localStorage.getItem('locale')
    if (localLocale) setLocale(localLocale)
    const localCompleted = window.localStorage.getItem("completed")
    if (localCompleted) setCompleted(localCompleted.split(","))
  }, [])

  return (
    <div className={styles.group}>
      <div className={styles.groupDetails} onClick={() => setCollapsed(prev => !prev)}>
        <h5 className={styles.groupTitle}>
          {!collapsed &&
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
          }

          {collapsed &&
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
          }

          {title}
          {/* <span>14 lessons</span> */}
        </h5>
      </div>
      {!collapsed && (
        <div className={styles.groupLessons}>
          <div className={styles.groupVideoLessons}>
            {lessons.map(({ title, path, translations }, i) => {
              const translation = translations[locale]
              const isCompleted = completed.includes(path)

              return (
                <Lesson key={`${title}-${i}`} title={title} translation={translation} backgroundImage={backgroundImage} path={path} isCompleted={isCompleted} />
              )
            })}
          </div>

          <div className={styles.groupAd}>
            {/* <div className={styles.empty} /> */}
            {/* <ins className="adsbygoogle"
              data-ad-client="ca-pub-4920440112171788"
              data-ad-slot="5676672665"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Edition