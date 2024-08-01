import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LessonCard from "@/app/_components/LessonCard";
import { storageUrl } from "@/app/_utils/constants";
import Play from "@/app/_components/Play";
import MarkCompleted from "@/app/_components/MarkCompleted";

const slugToTitle = slug => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export async function generateMetadata({ params }) {
  const { slug, card } = params
 
  const title = slugToTitle(slug)
  
  return {
    title: `Shadowing English: ${title} - Step ${card}`,
    description: `Practice English using the shadowing technique.`
  }
}

export default async function Home({ params }) {
  const { slug, card } = params

  const path = `/shadowing-technique-english-lessons/${slug}`

  const lesson = `${storageUrl}/lessons/${path}/lesson.json`
  const audio = `${storageUrl}/lessons/${path}/${card}.mp3`

  const data = await getData(lesson)

  const content = data.lesson[parseInt(card) - 1]

  const width = `${Math.ceil(parseInt(card) * 100 / data.lesson.length)}%`
  const isLast = !!!data.lesson[parseInt(card)]
  const isFirst = card == '1'

  const prevHref = isFirst ? null : `${path}/${parseInt(card) === 1 ? 1 : parseInt(card) - 1}#lesson`
  const nextHref = isLast ? null : `${path}/${parseInt(card) + 1}#lesson`

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
        <h1>{slug.replaceAll("-", " ")} ({card}/{data.lesson.length})</h1>

        <MarkCompleted disabled={!isLast} path={path} />
      </div>

      <div className={styles.lessonAds}>
        <div className={styles.lessonAd}>
          {/* <div className={styles.empty} /> */}
          {/* <ins className="adsbygoogle"
            data-ad-client="ca-pub-4920440112171788"
            data-ad-slot="3184442513"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </div>

        <div className={styles.lesson}>
          <LessonCard card={content} width={width} />

          <div className={styles.actions}>
            {!isFirst &&
              <Link className={styles.back} href={prevHref}>
                <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                  <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                </svg>
              </Link>
            }

            {isFirst && <div style={{ width: 64 }} />}

            <Play audio={audio} prevHref={prevHref} nextHref={nextHref} />

            {!isLast && (
              <Link className={styles.next} href={nextHref}>
                <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                  <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                </svg>
              </Link>
            )}

            {isLast && <div style={{ width: 64 }} />}
          </div>
        </div>

        <div className={styles.lessonAd}>
          {/* <div className={styles.empty} /> */}
          {/* <ins className="adsbygoogle"
            data-ad-client="ca-pub-4920440112171788"
            data-ad-slot="5676672665"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins> */}
        </div>
      </div>
    </main >
  );
}

async function getData(url) {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

