import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LegalHeader, LegalCallout, LegalSection, LegalUpdated } from "@/components/legal";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const COMPANY = "ITC ECOM LLC";
const EMAIL = "hello@upsidegpt.com";
const SITE_DOMAIN = "upsidegpt.com";
const EFFECTIVE = "June 1, 2026";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description: `Financial and trading risk statement for ${brand.name}, operated by ${COMPANY}.`,
  alternates: { canonical: `${siteUrl}/risk-disclosure` },
};

export default function RiskDisclosure() {
  return (
    <main>
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <LegalHeader
          title="Risk Disclosure"
          subtitle={`${brand.name} — Financial & Trading Risk Statement`}
          meta={`${COMPANY} · Effective: ${EFFECTIVE}`}
        />

        <LegalCallout>
          Trading and investing in financial markets involves substantial risk of loss. Do not invest more than you can
          afford to lose.
        </LegalCallout>

        <LegalSection n={1} title="General Risk Warning">
          <p>
            {brand.name} is an AI-powered stock-analysis tool designed to provide market insights and technical and
            fundamental observations. Using {brand.name} does not reduce or eliminate the risks inherent in trading and
            investing in any security or asset class.
          </p>
          <p>By using {brand.name}, you acknowledge and accept that:</p>
          <ul>
            <li>financial markets are inherently volatile and unpredictable;</li>
            <li>no analysis, tool, or person can guarantee profitable outcomes;</li>
            <li>all trading and investment decisions carry the potential for significant or total loss of capital;</li>
            <li>past performance — including historical data, backtests, or hypothetical results — does not guarantee future results;</li>
            <li>{brand.name} does not execute trades, manage money, or provide personalized investment advice.</li>
          </ul>
        </LegalSection>

        <LegalSection n={2} title="Stock Market-Specific Risks">
          <p>Investing and trading in equities (stocks) carries risks that no analysis tool can eliminate:</p>
          <ul>
            <li><strong>Volatility risk:</strong> share prices can move sharply and unexpectedly on news, sentiment, or broad market moves; {brand.name} cannot predict sudden movements.</li>
            <li><strong>Earnings & event risk:</strong> earnings reports, guidance updates, mergers, lawsuits, or management changes can cause large, rapid price gaps.</li>
            <li><strong>Gap risk:</strong> prices can gap overnight or in pre-market past your stop-loss, resulting in execution at far worse prices than expected.</li>
            <li><strong>Liquidity risk:</strong> small-cap or low-volume stocks can be difficult to exit at your desired price.</li>
            <li><strong>Concentration risk:</strong> holding too few positions or a single sector increases exposure to company- and industry-specific events.</li>
            <li><strong>Company-specific risk:</strong> a company can underperform, be defrauded, be delisted, or go bankrupt — which can result in a total loss of your investment.</li>
            <li><strong>Macroeconomic & systemic risk:</strong> interest rates, inflation, recessions, and market-wide crashes can affect entire markets regardless of any individual stock&rsquo;s merits.</li>
          </ul>
        </LegalSection>

        <LegalSection n={3} title="Leverage, Margin & Short-Selling Risks">
          <p>If you use leverage, margin, or short positions, your risk increases substantially:</p>
          <ul>
            <li><strong>Leverage & margin:</strong> trading on borrowed money amplifies both gains and losses, can trigger margin calls, and may result in losses exceeding your deposited capital.</li>
            <li><strong>Forced liquidation:</strong> a broker may close your positions automatically and at a loss if margin requirements are not met.</li>
            <li><strong>Short selling:</strong> the potential loss on a short position is theoretically unlimited, since a stock&rsquo;s price can rise without limit.</li>
            <li><strong>Spread & slippage:</strong> bid-ask spreads can widen during volatile periods, making entry and exit more expensive than expected.</li>
          </ul>
        </LegalSection>

        <LegalSection n={4} title="AI Tool-Specific Risks">
          <p>{brand.name} uses artificial intelligence to analyze charts and market data, which has inherent limitations:</p>
          <ul>
            <li><strong>Pattern-recognition limits:</strong> AI recognizes historical patterns but cannot account for novel conditions, structural changes, or unprecedented events.</li>
            <li><strong>Training-data bias:</strong> the model is trained on historical data that may not represent current or future market conditions.</li>
            <li><strong>Model error:</strong> AI can produce plausible-sounding but inaccurate or misleading analysis. Always verify outputs independently.</li>
            <li><strong>Incomplete context:</strong> {brand.name} analyzes charts and limited market data and does not have access to all relevant information.</li>
            <li><strong>No real-time reaction:</strong> outputs reflect data as of the moment of the request; market conditions and sentiment can change immediately.</li>
            <li><strong>Over-reliance:</strong> using {brand.name} as the primary or sole basis for decisions significantly increases the risk of loss.</li>
          </ul>
        </LegalSection>

        <LegalSection n={5} title="No Guaranteed Returns or Profits">
          <p className="uppercase">There is no guarantee of profit. There is no protection against losses.</p>
          <p>{brand.name} does not:</p>
          <ul>
            <li>guarantee any level of returns or profitability;</li>
            <li>promise winning trade percentages or success rates;</li>
            <li>protect against partial or total loss of capital;</li>
            <li>provide insurance against market downturns or adverse events;</li>
            <li>compensate users for losses resulting from trading decisions.</li>
          </ul>
          <p>Any statement about potential results, targets, or zones of opportunity is hypothetical, based on historical patterns, not a prediction or guarantee, subject to substantial error, and not suitable as the sole basis for a decision. All trading and investing carries the risk of total loss; you may lose some or all of your capital.</p>
        </LegalSection>

        <LegalSection n={6} title="Regulatory Considerations & Disclaimers">
          <p>
            {COMPANY} ({brand.name}) is not a financial institution, investment advisor, broker, or entity registered
            with any financial regulator. {brand.name} does not:
          </p>
          <ul>
            <li>hold or control customer funds or assets (never deposit funds with {brand.name});</li>
            <li>execute trades or manage accounts on your behalf;</li>
            <li>provide regulated financial advice in any jurisdiction;</li>
            <li>offer investment products, accounts, or trading platforms ({brand.name} is analysis software only);</li>
            <li>guarantee compliance with any user&rsquo;s local regulatory requirements.</li>
          </ul>
          <p>It is your responsibility to:</p>
          <ul>
            <li>ensure your use of {brand.name} complies with all laws and regulations in your jurisdiction;</li>
            <li>verify that trading or investing in the assets you analyze is legal where you reside;</li>
            <li>report all trading activity and gains or losses to the appropriate tax authorities;</li>
            <li>consult a licensed financial advisor for regulatory and investment guidance.</li>
          </ul>
        </LegalSection>

        <LegalSection n={7} title="Acknowledgment & Acceptance of Risks">
          <p>By using {brand.name}, you acknowledge and agree that you:</p>
          <ul>
            <li>understand that trading and investing involve substantial financial risk;</li>
            <li>have read, understood, and accept this Risk Disclosure and the full Terms of Service;</li>
            <li>accept full responsibility for your own trading and investment decisions;</li>
            <li>will not hold {brand.name}, {COMPANY}, or any related parties responsible for any losses;</li>
            <li>are aware that past performance does not indicate future results;</li>
            <li>will conduct your own independent research before making any decision;</li>
            <li>will only trade or invest with capital you can afford to lose entirely;</li>
            <li>may seek advice from a qualified financial professional before making significant decisions.</li>
          </ul>
          <p><strong>You use {brand.name} entirely at your own risk and are solely responsible for all outcomes, profits, and losses.</strong></p>
        </LegalSection>

        <LegalSection n={8} title="Contact">
          <p>For questions about this Risk Disclosure or to report a concern:</p>
          <p>
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <br />
            Website: <a href={siteUrl}>{SITE_DOMAIN}</a>
          </p>
          <p className="text-neutral-500">
            This Risk Disclosure is provided for informational purposes only and is not legal advice. For legal or
            regulatory guidance, consult a qualified attorney or financial advisor in your jurisdiction.
          </p>
        </LegalSection>

        <LegalUpdated>Last updated: {EFFECTIVE} — {COMPANY}, all rights reserved.</LegalUpdated>
      </article>
      <Footer />
    </main>
  );
}
