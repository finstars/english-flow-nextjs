"use client"

import React, { useEffect, useState } from "react";
import styles from "./Preferences.module.css"

const Preferences = () => {
  const [accent, setAccent] = useState("American")
  const [gender, setGender] = useState("Male")
  const [translations, setTranslations] = useState("No")

  useEffect(() => {
    if (window.localStorage.getItem("accent")) setAccent(window.localStorage.getItem("accent"))
    if (window.localStorage.getItem("gender")) setGender(window.localStorage.getItem("gender"))
    if (window.localStorage.getItem("translations")) setTranslations(window.localStorage.getItem("translations"))
  }, [])

  const handleAccent = (value) => {
    setAccent(value)
    window.localStorage.setItem("accent", value)
  }
  const handleGender = (value) => {
    setGender(value)
    window.localStorage.setItem("gender", value)
  }
  const handleTranslations = (value) => {
    setTranslations(value)
    window.localStorage.setItem("translations", value)
  }

  return (
    <div className={styles.preferences}>
      <div className={styles.preference}>
        <h5>Accent:</h5>
        <div className={styles.preferenceOptions}>
          <button onClick={() => handleAccent("American")} className={accent == 'American' ? styles.active : ''}><span className="em em-flag-us" /> American</button>
          <button onClick={() => handleAccent("British")} className={accent == 'British' ? styles.active : ''}><span className="em em-flag-gb" /> British</button>
          <button onClick={() => handleAccent("Canadian")} className={accent == 'Canadian' ? styles.active : ''}><span className="em em-flag-ca" /> Canadian</button>
          <button onClick={() => handleAccent("Australian")} className={accent == 'Australian' ? styles.active : ''}><span className="em em-flag-au" /> Australian</button>
          <button onClick={() => handleAccent("Irish")} className={accent == 'Irish' ? styles.active : ''}><span className="em em-flag-ir" /> Irish</button>
        </div>
      </div>

      <div className={styles.preference}>
        <h5>Gender:</h5>
        <div className={styles.preferenceOptions}>
          <button onClick={() => handleGender("Male")} className={gender == 'Male' ? styles.active : ''}><span className="em em-male_superhero" /> Male</button>
          <button onClick={() => handleGender("Female")} className={gender == 'Female' ? styles.active : ''}><span className="em em-female_superhero" /> Female</button>
        </div>
      </div>

      <div className={styles.preference}>
        <h5>Translations:</h5>
        <div className={styles.preferenceOptions}>
          <button onClick={() => handleTranslations("No")} className={translations == 'No' ? styles.active : ''}><span className="em em-no_entry" /> No</button>
          <button onClick={() => handleTranslations("Somali")} className={translations == 'Somali' ? styles.active : ''}><span className="em em-flag-so" /> Somali</button>
        </div>
      </div>
    </div>
  )
};

export default Preferences