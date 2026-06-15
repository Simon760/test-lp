import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LegalHeader, LegalSection, LegalSub, LegalUpdated } from "@/components/legal";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const COMPANY = "ITC ECOM LLC";
const ADDRESS = "30 N Gould St STE N, Sheridan, WY 82801, USA";
const EMAIL = "hello@upsidegpt.com";
const SITE_DOMAIN = "upsidegpt.com";
const EFFECTIVE = "June 1, 2026";
const PAYMENT_PROCESSOR = "our third-party payment processor"; // e.g. "Stripe" / "Whop.com"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${COMPANY} (${brand.name}) collects, uses, and protects your personal data.`,
  alternates: { canonical: `${siteUrl}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <LegalHeader
          title="Privacy Policy"
          subtitle={`${brand.name} — Data Protection & Cookie Policy`}
          meta={`${COMPANY} · Effective: ${EFFECTIVE}`}
        />

        <LegalSection n={1} title="Introduction">
          <p>
            {COMPANY}, operating as {brand.name} (<strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>,{" "}
            <strong>&ldquo;our&rdquo;</strong>), is committed to protecting the privacy of all users of {SITE_DOMAIN}{" "}
            (the <strong>&ldquo;Platform&rdquo;</strong>). This Privacy Policy explains what personal data we collect, how
            we use it, who we share it with, and the rights you have over your data.
          </p>
          <p>
            By accessing or using the Platform, you consent to the practices described in this Policy. If you do not
            agree, please discontinue use of the Platform.
          </p>
        </LegalSection>

        <LegalSection n={2} title="Data Controller">
          <p>
            The data controller responsible for your personal data is {COMPANY}, {ADDRESS} —{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </LegalSection>

        <LegalSection n={3} title="Data We Collect">
          <LegalSub title="3.1 Data you provide directly">
            <ul>
              <li>account registration data: name, email address, and username;</li>
              <li>payment information, processed by {PAYMENT_PROCESSOR} (we do not store your card details);</li>
              <li>communications: emails, support tickets, or messages you send us.</li>
            </ul>
          </LegalSub>
          <LegalSub title="3.2 Data collected automatically">
            <ul>
              <li>technical data: IP address, browser type, operating system, and device identifiers;</li>
              <li>usage data: pages visited, time spent, clicks, and features used;</li>
              <li>cookie and tracking data (see Section 6);</li>
              <li>log data: access logs, error logs, and timestamps.</li>
            </ul>
          </LegalSub>
          <LegalSub title="3.3 Data from third parties">
            <ul>
              <li>payment data from {PAYMENT_PROCESSOR} (transaction confirmation and subscription status);</li>
              <li>advertising data from analytics and advertising platforms we may use (see Section 6).</li>
            </ul>
          </LegalSub>
        </LegalSection>

        <LegalSection n={4} title="How We Use Your Data">
          <p>We use personal data to:</p>
          <ul>
            <li>provide and maintain the Service and your account;</li>
            <li>process payments and manage subscriptions and lifetime purchases;</li>
            <li>send transactional communications (receipts, account notifications);</li>
            <li>send marketing communications where you have provided consent;</li>
            <li>analyze Platform usage to improve our services;</li>
            <li>measure and serve advertising through analytics and advertising tools;</li>
            <li>comply with legal obligations and enforce our Terms of Service;</li>
            <li>detect and prevent fraud or abuse.</li>
          </ul>
        </LegalSection>

        <LegalSection n={5} title="Legal Basis for Processing">
          <p>We process your data on the following legal bases:</p>
          <ul>
            <li><strong>Contract performance:</strong> to fulfill our agreement with you;</li>
            <li><strong>Legitimate interests:</strong> analytics, fraud prevention, and service improvement;</li>
            <li><strong>Consent:</strong> marketing emails and cookies, where required;</li>
            <li><strong>Legal obligation:</strong> compliance with applicable laws.</li>
          </ul>
        </LegalSection>

        <LegalSection n={6} title="Cookies & Tracking Technologies">
          <LegalSub title="6.1 Cookies">
            <p>We use cookies and similar technologies on the Platform for:</p>
            <ul>
              <li>session management and authentication;</li>
              <li>analytics (understanding how users interact with the Platform);</li>
              <li>advertising and retargeting.</li>
            </ul>
            <p>
              You may control cookie settings through your browser. Disabling certain cookies may affect Platform
              functionality.
            </p>
          </LegalSub>
          <LegalSub title="6.2 Advertising pixels">
            <p>
              We may use advertising pixels such as the Meta Pixel (provided by Meta Platforms, Inc.) to measure the
              effectiveness of our advertising campaigns and to serve relevant ads to users who have visited the
              Platform. Such pixels may collect your IP address, browser information, page URL, and events you trigger
              (such as page views or purchases), processed by the provider under its own privacy policy. You can opt out
              of Meta&rsquo;s data collection at{" "}
              <a href="https://www.facebook.com/help/568137493302217">facebook.com/help/568137493302217</a> or through
              your Meta ad preferences.
            </p>
          </LegalSub>
          <LegalSub title="6.3 Other analytics tools">
            <p>
              We may use Google Analytics or similar tools for traffic analysis. These tools collect anonymized usage
              data governed by their respective privacy policies.
            </p>
          </LegalSub>
        </LegalSection>

        <LegalSection n={7} title="Data Sharing">
          <p>We do not sell your personal data. We may share data with:</p>
          <ul>
            <li><strong>{PAYMENT_PROCESSOR}:</strong> for payment and subscription management;</li>
            <li><strong>advertising and analytics providers:</strong> for measurement and advertising;</li>
            <li><strong>hosting and infrastructure providers:</strong> for operating the Platform;</li>
            <li><strong>legal authorities:</strong> where required by law or court order;</li>
            <li><strong>successors:</strong> in the event of a merger, acquisition, or asset sale.</li>
          </ul>
        </LegalSection>

        <LegalSection n={8} title="International Data Transfers">
          <p>
            Your data may be processed in the United States and in other countries. We take appropriate safeguards to
            ensure your data is protected in accordance with this Policy regardless of where it is processed.
          </p>
        </LegalSection>

        <LegalSection n={9} title="Data Retention">
          <p>
            We retain personal data for as long as necessary to provide the Service and to comply with our legal
            obligations. Account data is retained for the duration of your access plus a maximum of three (3) years
            thereafter for legal and compliance purposes.
          </p>
        </LegalSection>

        <LegalSection n={10} title="Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li><strong>Access:</strong> request a copy of your personal data;</li>
            <li><strong>Rectification:</strong> correct inaccurate or incomplete data;</li>
            <li><strong>Erasure:</strong> request deletion of your data;</li>
            <li><strong>Portability:</strong> receive your data in a portable format;</li>
            <li><strong>Objection:</strong> object to processing based on legitimate interests;</li>
            <li><strong>CCPA rights (California residents):</strong> the right to know, delete, and opt out of the sale of personal information.</li>
          </ul>
          <p>
            To exercise your rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </LegalSection>

        <LegalSection n={11} title="Data Security">
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against
            unauthorized access, loss, or alteration. However, no transmission over the internet is completely secure,
            and we cannot guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection n={12} title="Children's Privacy">
          <p>
            The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal data
            from minors. If we become aware of such collection, we will delete the data promptly.
          </p>
        </LegalSection>

        <LegalSection n={13} title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify users of material changes by email or by
            a notice on the Platform. The updated Policy is effective upon posting.
          </p>
        </LegalSection>

        <LegalSection n={14} title="Contact">
          <p>For privacy-related inquiries, contact:</p>
          <p>
            {COMPANY} — {brand.name}
            <br />
            {ADDRESS}
            <br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </LegalSection>

        <LegalUpdated>Last updated: {EFFECTIVE} — {COMPANY}, all rights reserved.</LegalUpdated>
      </article>
      <Footer />
    </main>
  );
}
