"use client"

import React, { useRef } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import styles from "./Play.module.css"
import { useRouter } from 'next/navigation'

const Play = ({ audio, prevHref, nextHref }) => {
    const [isPulsing, setIsPulsing] = React.useState(false);
    const [audioUrl, setAudioUrl] = React.useState(null);

    const { load } = useAudioPlayer();
    const router = useRouter();

    React.useEffect(() => {
        const accent = window.localStorage.getItem('accent') || "American"
        const gender = window.localStorage.getItem('gender') || "Male"
        
        const audioArray = audio.split("/")

        audioArray[audioArray.length - 1] = `${accent}-${gender}-${audioArray[audioArray.length - 1]}`

        const newAudioUrl = audioArray.join("/").replace("lessons//", "lessons/")

        setAudioUrl(newAudioUrl)

        cacheMp3File(newAudioUrl)
    }, []);

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && prevHref) {
                router.push(prevHref);
            } else if (event.key === 'ArrowRight' && nextHref) {
                router.push(nextHref);
            } else if (event.key === ' ' && audioUrl) {
                play();
                event.preventDefault()
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [prevHref, nextHref, router]);

    const play = () => {
        if (audioUrl) {
            load(audioUrl, {
                autoplay: true,
                html5: true,
                format: "mp3"
            });

            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 1000);
        }
    }

    if (!audioUrl) {
        return <span />
    }

    return (
        <button className={`${styles.play} ${isPulsing ? styles.pulse : ''}`} onClick={() => play()}>
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.804 17.804" xmlSpace="preserve">
                <g>
                    <g id="c98_play">
                        <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
			c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
			c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/>
                    </g>
                    <g id="Capa_1_78_">
                    </g>
                </g>
            </svg>
        </button>)
};

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

export default Play
