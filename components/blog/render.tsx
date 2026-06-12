import { ReactNode } from "react";
import Link from "next/link";
import { Figure, CandleAnatomy, TrendChart, SupportResistanceChart, AnalysisMockup } from "./figures";
import { CandlePatterns, Breakout, ScreenshotToReport, ThreeLayers } from "./figures2";
import { KeyTakeaways, Ul, ArticleCta, ArticleFaq } from "./chrome";

/* ── Structured content model (produced by the content workflow) ──
   Loosely typed on purpose so plain JSON data slots in without literal-union
   narrowing; the renderer guards every unknown type/motif. */
export type Block = {
  type: string;
  text?: string;
  items?: string[];
  motif?: string;
  caption?: string;
};

export type ArticleContentData = {
  keyTakeaways: string[];
  blocks: Block[];
  faq: { q: string; a: string }[];
};

const MOTIFS: Record<string, () => ReactNode> = {
  candleAnatomy: CandleAnatomy,
  trend: TrendChart,
  supportResistance: SupportResistanceChart,
  analysisMockup: AnalysisMockup,
  candlePatterns: CandlePatterns,
  breakout: Breakout,
  screenshotToReport: ScreenshotToReport,
  threeLayers: ThreeLayers,
};

/* Minimal inline renderer: supports **bold** and [label](/path). */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      out.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok);
      if (lm) {
        const href = lm[2];
        out.push(
          href.startsWith("/") ? (
            <Link key={key++} href={href}>{lm[1]}</Link>
          ) : (
            <a key={key++} href={href} target="_blank" rel="noopener noreferrer">{lm[1]}</a>
          )
        );
      } else out.push(tok);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderBlock(b: Block, i: number): ReactNode {
  const text = b.text ?? "";
  const items = b.items ?? [];
  switch (b.type) {
    case "h2":
      return <h2 key={i}>{inline(text)}</h2>;
    case "h3":
      return <h3 key={i}>{inline(text)}</h3>;
    case "p":
      return <p key={i}>{inline(text)}</p>;
    case "blockquote":
      return <blockquote key={i}>{inline(text)}</blockquote>;
    case "ul":
      return <Ul key={i} items={items.map((it) => inline(it))} />;
    case "ol":
      return (
        <ol key={i}>
          {items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ol>
      );
    case "figure": {
      const M = b.motif ? MOTIFS[b.motif] : undefined;
      if (!M) return null;
      return (
        <Figure key={i} caption={b.caption ?? ""}>
          <M />
        </Figure>
      );
    }
    case "cta":
      return <ArticleCta key={i} />;
    default:
      return null;
  }
}

export function ArticleContent({ content }: { content: ArticleContentData }) {
  const hasCta = content.blocks.some((b) => b.type === "cta");
  return (
    <>
      <KeyTakeaways items={content.keyTakeaways} />
      {content.blocks.map((b, i) => renderBlock(b, i))}
      {!hasCta && <ArticleCta />}
      <ArticleFaq items={content.faq} />
    </>
  );
}
