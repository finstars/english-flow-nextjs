"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LessonCard from "@/app/_components/LessonCard";
import lessons from "./lessons";
import { useAudioPlayer } from "react-use-audio-player";
import { useEffect } from "react";

export default function Home({ params }) {
  const { slug, card } = params

  const { load } = useAudioPlayer();

  const content = lessons[slug][card]

  const prevHref = `/shadowing-technique-english-lessons/${slug}/${parseInt(card) === 1 ? 1 : parseInt(card) - 1}#lesson`
  const nextHref = `/shadowing-technique-english-lessons/${slug}/${parseInt(card) + 1}#lesson`

  useEffect(() => {
    if (content.audio) cacheMp3File(content.audio)
  }, [])

  const play = () => {
    load(`${booksBaseUrl}/${encodeFilename(book)}/${chapterIndex + 1}/${gifIndex + 1}.mp3`, {
      autoplay: true,
      html5: true,
      format: "mp3"
    });
  }

  return (
    <main id="lesson" className={styles.main}>
      <Link className={styles.goBack} href="/shadowing-technique-english-lessons">
        <svg fill="#000000" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.676 26.676" xmlSpace="preserve">
          <g>
            <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59
		c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815
		C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029
		c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562
		C26.18,21.891,26.141,21.891,26.105,21.891z"/>
          </g>
        </svg>
        <span>Go back</span>
      </Link>

      <div className={styles.intro}>
        <h1>{slug.replace("-", " ")}</h1>
        {/* <p>15 cards</p> */}
      </div>

      <div className={styles.lessonAds}>
        <div className={styles.lessonAd}>
          <img src="/ad-vertical.png" />
        </div>

        <div className={styles.lesson}>
          <LessonCard card={content} isLast={false} />

          <div className={styles.actions}>
            <Link className={styles.back} href={prevHref}>
              <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
              </svg>
            </Link>

            <button className={styles.play}>
              <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m 8 1 c -1.644531 0 -3 1.355469 -3 3 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 1.914062 0 3.492188 -1.570312 3.5 -3.480469 c 0 -0.007812 0 -0.011719 0 -0.019531 v -7.5 c 0 -0.5625 0.4375 -1 1 -1 h 4 c 0.5625 0 1 0.4375 1 1 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 s 3.5 -1.578125 3.5 -3.5 v -7.5 c 0 -1.644531 -1.355469 -3 -3 -3 z m -4.5 9 c 0.839844 0 1.5 0.660156 1.5 1.5 v 0.015625 c -0.007812 0.832031 -0.664062 1.484375 -1.5 1.484375 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 8 0 c 0.839844 0 1.5 0.660156 1.5 1.5 s -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0" fill="#000" />
              </svg>
            </button>

            <Link className={styles.next} href={nextHref}>
              <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.lessonAd}>
          <img src="/ad-vertical.png" />
        </div>
      </div>


      {/* 
      {modalIsOpen &&
        <div class="modal-window">
          <div>
            <div className="modal-header">
              <a onClick={() => setIsOpen(false)} title="Close" class="modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fill-rule="evenodd"><path d="M880 112c17.7 0 32 14.3 32 32v736c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32ZM639.978 338.82l-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z" /></svg>
              </a>
              <a onClick={() => setIsOpen(false)} title="Close" class="modal-title">Greetings</a>
            </div>

            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className={styles.mySwiper}
            >
              <SwiperSlide className={styles.oneSlide}>
                <div className={styles.slideMain}>Use the zone tools to revert to a previous state with snapshots or use existing zone profiles to load a zone configuration.</div>
                <div className={styles.slideSubmain}>Incearca acest fel.</div>
              </SwiperSlide>
              <SwiperSlide className={styles.oneSlide}>Slide 2</SwiperSlide>
            </Swiper>

            <button className={styles.slidePlay}>
              Play
            </button>
          </div>
        </div>
      } */}
    </main >
  );
}

const cacheMp3File = async (url) => {
  if ('caches' in window) {
    const cacheName = 'mp3-cache';
    const cache = await caches.open(cacheName);

    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response.clone());
        console.log('MP3 file cached successfully.');
      } else {
        console.error('Failed to fetch the MP3 file.');
      }
    } catch (error) {
      console.error('Error fetching and caching the MP3 file:', error);
    }
  } else {
    console.error('Cache API is not supported in this browser.');
  }
};