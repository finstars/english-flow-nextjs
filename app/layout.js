import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";
import Translations from "./_components/Translations";
import AdHeader from "./_components/AdHeader";
import Script from "next/script";
import Hamburger from "./_components/Hamburger";

const noto = Noto_Sans({ variable: [400, 500, 600, 700, 800, 900], subsets: ["latin"] })

export const revalidate = 3600

export const metadata = {
  title: "English Flow",
  description: "Learn English with AI for Free",
};

export default async function RootLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || ""

  return (
    <html lang={"en"}>
      <body className={noto.className}>
        {/* <Script strategy="lazyOnload" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4920440112171788" /> */}

        <header>
          <div className="logo-ad">
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

        <div className="nav">
          <div className="nav-links">
            <Link className={pathname === "/" ? "active" : ""} href="/">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve"><g><path fill="#fff" d="M94.485,41.471L60.371,7.363c-2.531-2.547-5.906-3.944-9.513-3.944h-0.303c-3.589,0-6.957,1.39-9.489,3.922   L6.944,41.465C4.398,44.007,3,47.383,3,50.977c0,3.596,1.398,6.973,3.92,9.484c2.54,2.547,5.919,3.944,9.513,3.944   c0.092,0,0.187-0.005,0.283-0.005v18.786c0,7.037,5.708,12.745,12.746,12.745h42.493c7.038,0,12.746-5.708,12.746-12.745V64.4   c0.096,0,0.188,0.005,0.286,0.005c3.591,0,6.966-1.391,9.498-3.935C99.727,55.236,99.727,46.712,94.485,41.471z M58.673,80.301   c0,3.938-3.566,7.134-7.969,7.134c-4.4,0-7.965-3.195-7.965-7.134v-8.497c0-3.938,3.564-7.134,7.965-7.134   c4.402,0,7.969,3.195,7.969,7.134V80.301z" /></g></svg>
            </Link>

            <Link className={pathname.includes("/shadowing-technique-english-lessons") ? "active" : ""} href="/shadowing-technique-english-lessons"><span>Lvl 1. Beginner</span> Shadowing</Link>
            <Link className={pathname.includes("/conversational-english-lessons") ? "active" : ""} href="/conversational-english-lessons"><span>Lvl 2. Intermediate</span> Conversational</Link>
            <Link className={pathname.includes("/tpr-storytelling-english-lessons") ? "active" : ""} href="/tpr-storytelling-english-lessons"><span>Lvl 3. Advanced</span> TPR Storytelling</Link>

            <Translations />
          </div>
        </div>

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