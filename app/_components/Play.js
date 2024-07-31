"use client"

import React from "react";
import { useAudioPlayer } from "react-use-audio-player";
import styles from "./Play.module.css"
import { useRouter } from 'next/navigation'

const Play = ({ audio, prevHref, nextHref }) => {
    const [isPulsing, setIsPulsing] = React.useState(false);

    const { load } = useAudioPlayer();
    const router = useRouter();

    React.useEffect(() => {
        cacheMp3File(audio)
    }, []);

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft' && prevHref) {
                router.push(prevHref);
            } else if (event.key === 'ArrowRight' && nextHref) {
                router.push(nextHref);
            } else if (event.key === ' ' && audio) {
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
        if (audio) {
            load(audio, {
                autoplay: true,
                html5: true,
                format: "mp3"
            });

            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 1000);
        }
    }

    return (
        <button className={`${styles.play} ${isPulsing ? styles.pulse : ''}`} onClick={() => play()}>
            <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m 8 1 c -1.644531 0 -3 1.355469 -3 3 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 1.914062 0 3.492188 -1.570312 3.5 -3.480469 c 0 -0.007812 0 -0.011719 0 -0.019531 v -7.5 c 0 -0.5625 0.4375 -1 1 -1 h 4 c 0.5625 0 1 0.4375 1 1 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 s 3.5 -1.578125 3.5 -3.5 v -7.5 c 0 -1.644531 -1.355469 -3 -3 -3 z m -4.5 9 c 0.839844 0 1.5 0.660156 1.5 1.5 v 0.015625 c -0.007812 0.832031 -0.664062 1.484375 -1.5 1.484375 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 8 0 c 0.839844 0 1.5 0.660156 1.5 1.5 s -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0" fill="#000" />
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
