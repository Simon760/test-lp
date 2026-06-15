import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const COMPANY = "ITC ECOM LLC";
const ADDRESS = "30 N Gould St STE N, Sheridan, WY 82801, USA";
const EMAIL = "hello@upsidegpt.com";
const EFFECTIVE = "June 1, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of ${brand.name}, operated by ${COMPANY}.`,
  alternates: { canonical: `${siteUrl}/terms-of-service` },
};

/* One numbered article — formal legal styling, divider above each. */
function Article({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="mt-10 border-t border-white/10 pt-10">
      <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
        <span className="text-neutral-500">{n}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-neutral-400 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-neutral-200 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-neutral-600">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfService() {
  return (
    <main>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        {/* header */}
        <header className="border-b border-white/10 pb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Legal</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-5 text-sm text-neutral-400">{COMPANY} &mdash; operator of {brand.name}</p>
          <p className="mt-1 text-sm text-neutral-500">Effective date: {EFFECTIVE} · Last updated: {EFFECTIVE}</p>
        </header>

        {/* intro */}
        <div className="mt-10 space-y-4 text-[15px] leading-7 text-neutral-400 [&_strong]:font-semibold [&_strong]:text-neutral-200">
          <p>
            These Terms of Service (the <strong>&ldquo;Terms&rdquo;</strong>) form a legally binding agreement between
            you (<strong>&ldquo;you&rdquo;</strong>) and {COMPANY} (<strong>&ldquo;{brand.name}&rdquo;</strong>,{" "}
            <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, <strong>&ldquo;our&rdquo;</strong>), a
            limited liability company formed in November 2025 under the laws of the State of Wyoming, United States, with
            its registered address at {ADDRESS}. They govern your access to and use of the {brand.name} website,
            applications, and related services (together, the <strong>&ldquo;Service&rdquo;</strong>).
          </p>
          <p>
            By creating an account, accessing, or using the Service in any way, you confirm that you have read,
            understood, and agree to be bound by these Terms and by our Privacy Policy.{" "}
            <strong>If you do not agree, you must not access or use the Service.</strong>
          </p>
        </div>

        <Article n={1} title="The Service">
          <p>
            {brand.name} is an AI-powered stock-analysis tool. You submit a screenshot or link of a stock chart, and the
            Service returns an automated, software-generated analysis that may include the detected trend, key price
            levels, indicators, a suggested buy / sell / wait read, entry, stop-loss and take-profit levels, probability
            scenarios, and related fundamental and market context. The Service is a research and educational tool only.
            It is automated and operates without human review of individual outputs.
          </p>
        </Article>

        <Article n={2} title="Not financial advice — risk disclosure">
          <p>
            <strong>
              {brand.name} is not a financial advisor, investment adviser, broker, broker-dealer, or fiduciary, and
              nothing in the Service constitutes financial, investment, trading, legal, tax, or accounting advice.
            </strong>{" "}
            The Service is provided strictly for educational and informational purposes.
          </p>
          <ul>
            <li>We do not recommend that you buy, sell, or hold any security, and we do not solicit any transaction.</li>
            <li>Any analysis, signal, score, probability, or level produced by the Service is the output of software and may be inaccurate, incomplete, delayed, or wrong. It must never be relied upon as the sole basis for any decision.</li>
            <li>Trading and investing in financial markets involve a substantial risk of loss, including the loss of your entire investment. You may lose more than you invest when using leverage.</li>
            <li>Past performance and back-tested or hypothetical results are not indicative of and do not guarantee future results.</li>
            <li>You are solely and exclusively responsible for your own decisions and for any gains or losses you incur. Before acting, you should do your own research and consult a licensed financial professional.</li>
          </ul>
        </Article>

        <Article n={3} title="Eligibility">
          <p>
            You must be at least 18 years old and able to form a binding contract to use the Service. You may not use the
            Service if you are barred from doing so under the laws of the United States or any other applicable
            jurisdiction, or if you are located in, or are a resident of, a country or region subject to comprehensive
            sanctions. By using the Service, you represent and warrant that you meet these requirements.
          </p>
        </Article>

        <Article n={4} title="Accounts">
          <p>
            To use most features you must create an account and provide accurate, current, and complete information. You
            are responsible for keeping your credentials confidential and for all activity that occurs under your
            account. Notify us immediately at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> of any unauthorized use. We may
            refuse, suspend, or terminate accounts at our discretion, including for any breach of these Terms.
          </p>
        </Article>

        <Article n={5} title="Subscriptions, billing, and price changes">
          <p>
            The Service is offered on paid plans, including a recurring monthly subscription and a one-time lifetime
            plan. Prices are shown at checkout. Payments are processed by third-party payment providers; by subscribing
            you authorize us and our providers to charge your payment method.
          </p>
          <ul>
            <li><strong>Monthly plan:</strong> billed in advance and renews automatically each billing period until cancelled. You authorize recurring charges until you cancel.</li>
            <li><strong>Lifetime plan:</strong> a single one-time payment for access for the lifetime of the Service, subject to these Terms.</li>
            <li>You are responsible for all applicable taxes. We may change our prices or plans on a going-forward basis with reasonable notice; changes do not affect the current paid period.</li>
          </ul>
        </Article>

        <Article n={6} title="Cancellation and refunds">
          <p>
            You may cancel a monthly subscription at any time from your account; cancellation stops future renewals and
            your access continues until the end of the current paid period. Except where required by applicable law,
            payments are non-refundable and we do not provide refunds or credits for partial periods, unused time, or
            lifetime purchases. We may, at our sole discretion, offer a refund in individual cases.
          </p>
        </Article>

        <Article n={7} title="Acceptable use">
          <p>You agree not to, and not to permit anyone to:</p>
          <ul>
            <li>use the Service for any unlawful, fraudulent, or abusive purpose, or in violation of any law or regulation;</li>
            <li>copy, scrape, resell, sublicense, or commercially exploit the Service or its outputs without our written permission;</li>
            <li>reverse engineer, decompile, or attempt to extract the source code, models, or underlying logic of the Service;</li>
            <li>interfere with, overload, or disrupt the Service, or circumvent any access, usage, or security limits;</li>
            <li>upload content that is illegal, infringing, malicious, or that you do not have the right to submit;</li>
            <li>use automated means to access the Service except through interfaces we expressly provide.</li>
          </ul>
        </Article>

        <Article n={8} title="Your content">
          <p>
            You retain ownership of the charts, screenshots, and other materials you submit (<strong>&ldquo;Your
            Content&rdquo;</strong>). You grant us a worldwide, non-exclusive, royalty-free license to host, process, and
            use Your Content solely to operate, provide, secure, and improve the Service. You represent that you have the
            rights necessary to submit Your Content and that it does not violate any law or third-party right.
          </p>
        </Article>

        <Article n={9} title="Intellectual property">
          <p>
            The Service, including its software, models, design, text, graphics, and the {brand.name} name and logo, is
            owned by {COMPANY} or its licensors and is protected by intellectual-property laws. Subject to these Terms,
            we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your own
            personal, non-commercial purposes. All rights not expressly granted are reserved.
          </p>
        </Article>

        <Article n={10} title="Third-party data and services">
          <p>
            The Service relies on market, price, fundamental, and other data obtained from third-party sources, and may
            link to or integrate third-party services. We do not control and are not responsible for the accuracy,
            completeness, timeliness, or availability of third-party data or services, and we make no warranty regarding
            them. Your use of any third-party service is governed by that party&rsquo;s own terms.
          </p>
        </Article>

        <Article n={11} title="Disclaimer of warranties">
          <p>
            The Service and all outputs are provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
            <strong>&ldquo;as available&rdquo;</strong>, without warranties of any kind, whether express, implied, or
            statutory, including any implied warranties of merchantability, fitness for a particular purpose,
            non-infringement, accuracy, or uninterrupted or error-free operation. We do not warrant that the Service or
            any output will be accurate, reliable, profitable, or suitable for your purposes.
          </p>
        </Article>

        <Article n={12} title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, in no event will {COMPANY}, its officers, members, employees, or
            agents be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for
            any loss of profits, trading or investment losses, revenue, data, or goodwill, arising out of or related to
            your use of (or inability to use) the Service, even if advised of the possibility of such damages. To the
            maximum extent permitted by law, our total aggregate liability for all claims relating to the Service will
            not exceed the greater of the amount you paid us for the Service in the three (3) months before the event
            giving rise to the claim, or USD 100.
          </p>
        </Article>

        <Article n={13} title="Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless {COMPANY} and its representatives from and against any
            claims, damages, liabilities, losses, and expenses (including reasonable legal fees) arising out of or
            related to your use of the Service, Your Content, your trading or investment decisions, or your breach of
            these Terms or of any law or third-party right.
          </p>
        </Article>

        <Article n={14} title="Termination">
          <p>
            You may stop using the Service at any time. We may suspend or terminate your access at any time, with or
            without notice, including for breach of these Terms or where we reasonably believe your use poses a risk.
            Upon termination, your right to use the Service ends immediately. Sections that by their nature should
            survive termination (including Sections 2, 8&ndash;13, and 15&ndash;16) will survive.
          </p>
        </Article>

        <Article n={15} title="Changes to the Terms and the Service">
          <p>
            We may modify the Service or these Terms from time to time. When we make material changes to these Terms, we
            will update the &ldquo;Last updated&rdquo; date above and, where appropriate, provide additional notice. Your
            continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
          </p>
        </Article>

        <Article n={16} title="Governing law and dispute resolution">
          <p>
            These Terms are governed by the laws of the State of Wyoming, United States, without regard to its
            conflict-of-laws rules. You agree that any dispute arising out of or relating to these Terms or the Service
            will be resolved on an individual basis, and you waive any right to participate in a class or representative
            action. Subject to applicable law, the state and federal courts located in Wyoming will have jurisdiction
            over any dispute not subject to arbitration.
          </p>
        </Article>

        <Article n={17} title="Miscellaneous">
          <p>
            These Terms, together with our Privacy Policy, are the entire agreement between you and us regarding the
            Service. If any provision is found unenforceable, the remaining provisions remain in effect. Our failure to
            enforce any right is not a waiver. You may not assign these Terms without our consent; we may assign them in
            connection with a merger, acquisition, or sale of assets. We are not liable for any delay or failure caused
            by events beyond our reasonable control.
          </p>
        </Article>

        <Article n={18} title="Contact">
          <p>
            Questions about these Terms can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <p>
            {COMPANY}
            <br />
            {ADDRESS}
          </p>
        </Article>
      </article>
      <Footer />
    </main>
  );
}
