import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import Hamburger from "./_components/Hamburger";
import Nav from "./_components/Nav";

const noto = Noto_Sans({ variable: [400, 500, 600, 700, 800, 900], subsets: ["latin"] })

export const revalidate = 3600

export const metadata = {
  title: "English Flow",
  description: "Learn English with AI for Free",
};

export default async function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <head>
        <meta property="og:image" content="https://www.englishflow.ai/intro2.jpg" />
        <meta property="og:image:alt" content="English Flow - Learn English with AI for Free" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="870" />
        <meta property="og:image:height" content="324" />
        <meta name="google-adsense-account" content="ca-pub-4920440112171788" />
      </head>
      <body className={noto.className}>
      <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-6572YH926J" />
      <Script>{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6572YH926J');`}</Script>

        {/* <Script strategy="lazyOnload" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4920440112171788" /> */}

        <header>
          <div className="logo-and-ad">
            <Link className="logo" href="/">
              <img src="/logo.svg" alt={metadata.title} />
              <span className="logo-details">
                <span className="logo-title">English Flow</span>
                <span className="logo-sub">
                  Learn English with AI for Free
                </span>
              </span>
            </Link>

            <div className="ad">
              {/* <ins className="adsbygoogle"
                style={{ display: "block", width: "729px", height: "90px" }}
                data-ad-client="ca-pub-4920440112171788"
                data-ad-slot="2989001394"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              <Script id="banner-ad">{`(adsbygoogle = window.adsbygoogle || []).push({ });`}</Script> */}
            </div>
          </div>

          <Hamburger />
        </header>

        <Nav />

        {children}

        <footer>
          {/* <img src="/london.svg" alt="English Flow - London" /> */}
          <div className="footer-inner">
            <h4>English Flow</h4>
            <div className={"footer-links"}>
              {/* <Link href="/">English in England</Link>
              <Link href="/">Basic Grammar: Tenses</Link>
              <Link href="/">Basic Grammar: Common phrases</Link>
              <Link href="/">Basic Grammar: Vocabulary</Link> */}
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of use</Link>
            </div>
            <div className={'footer-note'}>Copyright © 2024 English Flow.<br />With <span className="em em-heart" /> From London.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}