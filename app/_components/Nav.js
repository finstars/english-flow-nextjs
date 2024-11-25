"use client"

import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname()

    const handleClick = () => {
        document.body.classList.remove("hamburger");
    }

    return (
        <div className={`${styles.nav} nav`}>
            <div className={styles.navLinks}>
                <Link onClick={handleClick} className={pathname === "/" ? styles.active : ""} href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g><path fill="#fff" d="M94.485,41.471L60.371,7.363c-2.531-2.547-5.906-3.944-9.513-3.944h-0.303c-3.589,0-6.957,1.39-9.489,3.922   L6.944,41.465C4.398,44.007,3,47.383,3,50.977c0,3.596,1.398,6.973,3.92,9.484c2.54,2.547,5.919,3.944,9.513,3.944   c0.092,0,0.187-0.005,0.283-0.005v18.786c0,7.037,5.708,12.745,12.746,12.745h42.493c7.038,0,12.746-5.708,12.746-12.745V64.4   c0.096,0,0.188,0.005,0.286,0.005c3.591,0,6.966-1.391,9.498-3.935C99.727,55.236,99.727,46.712,94.485,41.471z M58.673,80.301   c0,3.938-3.566,7.134-7.969,7.134c-4.4,0-7.965-3.195-7.965-7.134v-8.497c0-3.938,3.564-7.134,7.965-7.134   c4.402,0,7.969,3.195,7.969,7.134V80.301z" /></g></svg>
                </Link>

                <Link onClick={handleClick} className={pathname.includes("/shadowing-technique-english-lessons") ? styles.active : ""} href="/shadowing-technique-english-lessons"><span>80% of English</span> 1-Week Course</Link>

                <Link onClick={handleClick} className={pathname.includes("/shadowing-technique-english-lessons") ? styles.active : ""} href="/shadowing-technique-english-lessons"><span>Beginner to Advanced</span> Practice Lessons</Link>

                {/* <Link onClick={handleClick} className={pathname.includes("/shadowing-technique-english-lessons") ? styles.active : ""} href="/shadowing-technique-english-lessons"><span>Lvl 1. Beginner</span> Shadowing</Link>
                <Link onClick={handleClick} className={pathname.includes("/conversational-english-lessons") ? styles.active : ""} href="/conversational-english-lessons"><span>Lvl 2. Intermediate</span> Conversational</Link>
                <Link onClick={handleClick} className={pathname.includes("/tpr-storytelling-english-lessons") ? styles.active : ""} href="/tpr-storytelling-english-lessons"><span>Lvl 3. Advanced</span> TPR Storytelling</Link> */}


                {/* <Link onClick={handleClick} className={pathname.includes("/tpr-storytelling-english-lessons") ? styles.active : ""} href="/practice-phrases"><span>All Lvls</span> Phrases</Link> */}
                {/* <Link onClick={handleClick} className={pathname.includes("/tpr-storytelling-english-lessons") ? styles.active : ""} href="/comedy-language-learning"><span>All Lvls</span> Comedy LL</Link> */}

                <Link onClick={handleClick} href="https://shop.englishflow.ai">
                    Shop
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.818 194.818" xmlSpace="preserve">
                        <g>
                            <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
                    c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
                    C194.818,6.19,190.789,2.161,185.818,2.161z"/>
                            <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
                    c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"/>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Nav