"use client"

import React, { useState, useEffect } from "react";
import { languages } from "../_utils/constants";

const Translations = () => {
  const [locale, setLocale] = useState("English")

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('locale')

    if (!savedLocale) {
      const userLanguage = navigator.language || navigator.userLanguage;
    
      const languageObject = languages.find(lang =>
        lang.codes.includes(userLanguage)
      );
  
      if (languageObject) {
        handleChange(languageObject.name)
      }
    } else {
      setLocale(savedLocale)
    }
  }, []);

  const handleChange = (value) => {
    setLocale(value)
    window.localStorage.setItem('locale', value)
    window.location.reload()
  }

  return (
    <select value={locale} onChange={e => handleChange(e.target.value)}>
      {languages.map((lang, i) => (
        <option key={i} value={lang.name}>I Speak {lang.name}</option>
      ))}
    </select>
  )
}

export default Translations