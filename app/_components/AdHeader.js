"use client"


import React, { useEffect } from "react";

const AdHeader = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle adbanner-customize"
            style={{
                display: "block"
            }}
            data-ad-client="ca-pub-4920440112171788"
            data-ad-slot="2989001394"
        />
    );
}

export default AdHeader