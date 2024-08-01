import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: 'Privacy Policy',
  description: 'Operated by 3M DIGITAL LTD. Effective Date: July 31, 2024',
}

export default function Home() {
  return (
    <main id="main" className={styles.main}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> July 31, 2024</p>

      <h2>1. Introduction</h2>
      <p>Welcome to EnglishFlow.ai, operated by 3M DIGITAL LTD. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.</p>

      <h2>2. Information We Collect</h2>
      <p>We do not require you to create an account or provide personal information to access our English lessons. However, we collect certain information through Google Analytics and Google Adsense for the purpose of analyzing site traffic and monetization.</p>

      <h2>3. Use of Collected Information</h2>
      <ul>
        <li><strong>Google Analytics:</strong> We use Google Analytics to collect anonymous data on how visitors interact with our website. This includes information such as the pages you visit, the time you spend on the site, and how you arrived at our website. This data helps us improve our content and user experience.</li>
        <li><strong>Google Adsense:</strong> We use Google Adsense to display advertisements on our website. Google Adsense may use cookies and web beacons to collect non-personally identifiable information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>Cookies are small data files that are placed on your device when you visit a website. We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements through Google Adsense. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.</p>

      <h2>5. Data Security</h2>
      <p>We take reasonable measures to protect the information collected through our website from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.</p>

      <h2>6. Third-Party Services</h2>
      <p>Our website does not involve any third-party services, accounts, or newsletters beyond the use of Google Analytics and Google Adsense as described above.</p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
      <p>Email: <a href="mailto:support@englishflow.ai">support@englishflow.ai</a><br />
        Registered Office: 71-75 Shelton Street, Covent Garden, WC2H 9JQ, London, United Kingdom</p>

      <h2>9. Governing Law</h2>
      <p>This Privacy Policy is governed by and construed in accordance with the laws of England and Wales.</p>

      <p>Thank you for choosing EnglishFlow.ai for your English learning needs. Your privacy is important to us.</p>
    </main>
  );
}
