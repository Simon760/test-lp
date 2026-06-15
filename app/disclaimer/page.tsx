import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LegalHeader, LegalCallout, LegalSection, LegalUpdated } from "@/components/legal";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const COMPANY = "ITC ECOM LLC";
const ADDRESS = "30 N Gould St STE N, Sheridan, WY 82801, USA";
const EMAIL = "hello@upsidegpt.com";
const SITE_DOMAIN = "upsidegpt.com";
const EFFECTIVE = "June 1, 2026";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Not financial advice, do your own research, and affiliate disclosure for ${brand.name}, operated by ${COMPANY}.`,
  alternates: { canonical: `${siteUrl}/disclaimer` },
};

export default function Disclaimer() {
  return (
    <main>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <LegalHeader
          title="Disclaimer"
          subtitle="Not Financial Advice · Do Your Own Research · Affiliate Disclosure"
          meta={`${COMPANY} · Effective: ${EFFECTIVE}`}
        />

        <LegalCallout>
          Important — please read before using {SITE_DOMAIN} or any associated content.
        </LegalCallout>

        <LegalSection n={1} title="Not Financial Advice (NFA)">
          <p className="uppercase">
            All content published on {SITE_DOMAIN}, its social-media channels, newsletters, chat communities, or any
            other associated medium is for informational and educational purposes only and does not constitute financial
            advice.
          </p>
          <p>
            {COMPANY} (operating as {brand.name}) is not a registered investment advisor, broker-dealer, financial
            planner, or any other type of regulated financial professional in any jurisdiction. {brand.name} holds no
            license or regulatory approval to provide financial advice, portfolio management, or investment
            recommendations.
          </p>
          <p>Nothing on this Platform should be construed as:</p>
          <ul>
            <li>a recommendation to buy, sell, or hold any stock, security, or other financial instrument or asset;</li>
            <li>a solicitation to invest in any particular product, fund, or strategy;</li>
            <li>a guarantee of any investment return or financial outcome;</li>
            <li>legal, tax, accounting, or regulatory advice of any kind.</li>
          </ul>
          <p>
            The AI-generated analyses provided by {brand.name} are automated outputs produced by a machine-learning
            model. They do not represent the opinion of any licensed financial professional and must not be relied upon
            as the sole basis for any financial decision.
          </p>
        </LegalSection>

        <LegalSection n={2} title="Do Your Own Research (DYOR)">
          <p>
            Financial markets — including the stock market and other securities — are complex, speculative, and subject
            to significant volatility. Past performance of any asset, signal, or analysis does not guarantee or predict
            future results.
          </p>
          <p>Before making any financial decision, you should:</p>
          <ul>
            <li>conduct your own independent research and due diligence;</li>
            <li>consult a licensed, qualified financial advisor in your jurisdiction;</li>
            <li>assess your own financial situation, risk tolerance, and objectives;</li>
            <li>be aware that you may lose some or all of the capital you invest;</li>
            <li>understand the regulatory environment for financial products in your country.</li>
          </ul>
          <p className="uppercase">
            {COMPANY} and {brand.name} assume no responsibility for any financial decision made by any user based on
            content published on this Platform or any associated channel.
          </p>
        </LegalSection>

        <LegalSection n={3} title="Affiliate Disclosure — FTC Compliance">
          <p>
            In compliance with the U.S. Federal Trade Commission (FTC) Endorsement and Testimonial Guidelines (16 CFR
            Part 255), {brand.name} discloses the following:
          </p>
          <p>
            {brand.name} may receive financial compensation, commissions, free products, or other benefits from
            third-party companies in exchange for promoting, recommending, or linking to their products or services on{" "}
            {SITE_DOMAIN}, social-media channels, email communications, or any other associated medium.
          </p>
          <p>Such material connections include, but are not limited to:</p>
          <ul>
            <li>affiliate commissions earned when a user clicks a link and makes a purchase;</li>
            <li>sponsored content or paid partnerships with third-party providers;</li>
            <li>revenue-sharing arrangements with partner platforms.</li>
          </ul>
          <p>
            Where applicable, affiliate content and sponsored posts are clearly labeled with disclosures such as
            &ldquo;#Ad&rdquo;, &ldquo;#Sponsored&rdquo;, &ldquo;#Affiliate&rdquo;, or &ldquo;Paid Partnership&rdquo;. These
            relationships do not influence the objectivity, accuracy, or independence of {brand.name}&rsquo;s analysis
            tools; however, users should be aware that affiliated recommendations may involve a commercial interest.
          </p>
        </LegalSection>

        <LegalSection n={4} title="AI Tool Limitations">
          <p>
            {brand.name}&rsquo;s analysis tool uses artificial intelligence and machine-learning models that are
            experimental in nature and subject to error. The AI may:
          </p>
          <ul>
            <li>generate inaccurate or misleading analyses;</li>
            <li>fail to account for macroeconomic events, news, or market sentiment;</li>
            <li>produce inconsistent outputs under certain market conditions;</li>
            <li>be affected by technical errors, bugs, or model limitations.</li>
          </ul>
          <p className="uppercase">
            Use of the {brand.name} AI tool is entirely at your own risk. {COMPANY} makes no warranty that the
            tool&rsquo;s outputs are accurate, complete, or fit for any particular purpose.
          </p>
        </LegalSection>

        <LegalSection n={5} title="Advertising & Testimonials Disclosure">
          <p>
            {brand.name} may run paid advertising campaigns on platforms including Meta (Facebook &amp; Instagram),
            Google, TikTok, X (Twitter), and others. These advertisements are labeled as &ldquo;Sponsored&rdquo; or
            &ldquo;Ad&rdquo; in accordance with each platform&rsquo;s requirements.
          </p>
          <p>
            Testimonials, results, or performance claims shown in advertisements represent individual experiences and are
            not typical or guaranteed. Results vary based on individual skill, market conditions, capital deployed, and
            risk management. Any performance figures or screenshots displayed in advertising materials are for
            illustrative purposes only and do not constitute a promise or guarantee of similar returns.
          </p>
        </LegalSection>

        <LegalSection n={6} title="Limitation of Liability">
          <p className="uppercase">
            To the fullest extent permitted by applicable law, {COMPANY}, its officers, members, employees, contractors,
            and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
            damages of any kind arising from:
          </p>
          <ul>
            <li>(i) use of or reliance on any content published on {SITE_DOMAIN} or any associated channel;</li>
            <li>(ii) trading or investment decisions made based on AI analyses or any other content;</li>
            <li>(iii) loss of capital, profits, data, or any other financial loss;</li>
            <li>(iv) the actions of any third-party affiliate, partner, or advertiser.</li>
          </ul>
        </LegalSection>

        <LegalSection n={7} title="Contact">
          <p>For questions regarding this Disclaimer:</p>
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
