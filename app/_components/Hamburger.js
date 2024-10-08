"use client"

import React from "react";
import styles from "./Hamburger.module.css"

const Hamburger = () => {
  
  const handleClick = () => {
    document.body.classList.toggle("hamburger");
  }

  return <button className={styles.hamburger} onClick={() => handleClick()}>
    <svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path fill="#000000" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
    </svg>
  </button>
};

export default Hamburger