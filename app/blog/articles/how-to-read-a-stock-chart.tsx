import { CandleAnatomy, Figure, TrendChart, SupportResistanceChart, AnalysisMockup } from "@/components/blog/figures";
import { KeyTakeaways, Ul, ArticleCta, ArticleFaq } from "@/components/blog/chrome";

export default function Body() {
  return (
    <>
      <KeyTakeaways
        items={[
          "A stock chart shows four things at once: price, time, direction, and momentum.",
          "Master three building blocks first — candlesticks, trend, and support/resistance. Everything else builds on them.",
          "Indicators like RSI and moving averages confirm what price is already telling you. They don't replace it.",
          "The chart only tells you the technical side. The fundamentals and analyst targets behind the move matter just as much.",
          "Reading a chart well takes years. AI can hand you the same read in seconds — use it to learn faster and decide with a plan.",
        ]}
      />

      <p>
        Open any stock chart for the first time and it looks like noise — a wall of red and green bars climbing and
        falling with no obvious meaning. But every one of those bars is telling you a story: who is winning, buyers or
        sellers, and where the price is likely to go next. Learning to read that story is the single most useful skill a
        new trader or investor can build.
      </p>
      <p>
        This guide breaks chart reading down into the handful of concepts that actually matter, in the order you should
        learn them. No jargon for the sake of it — just what each element means and how to use it.
      </p>

      <h2>What a stock chart actually shows</h2>
      <p>
        A price chart maps a stock's price (vertical axis) against time (horizontal axis). The most common format is the{" "}
        <strong>candlestick chart</strong>, because each candle packs four prices into one shape: the open, the close,
        the high and the low for that period — a day, an hour, or five minutes, depending on your timeframe.
      </p>

      <Figure caption="A candlestick encodes the open, close, high and low. Green means price closed higher; red means it closed lower.">
        <CandleAnatomy />
      </Figure>

      <p>
        The <strong>body</strong> is the range between the open and close. The thin lines above and below — the{" "}
        <strong>wicks</strong> (or shadows) — show how far price stretched before snapping back. A long lower wick, for
        example, means buyers stepped in aggressively after a sell-off. Read enough candles in sequence and you start to
        feel the balance of power shifting in real time.
      </p>

      <h2>Building block 1: the trend</h2>
      <p>
        Before anything else, answer one question: which way is the stock moving? There are only three possible answers,
        and they decide everything else you do.
      </p>
      <Ul
        items={[
          <><strong>Uptrend</strong> — a series of higher highs and higher lows. Buyers are in control.</>,
          <><strong>Downtrend</strong> — lower highs and lower lows. Sellers are in control.</>,
          <><strong>Range</strong> — price chops sideways between two levels. Neither side is winning.</>,
        ]}
      />

      <Figure caption="An uptrend: each pullback bottoms out higher than the last, forming a rising support trendline.">
        <TrendChart />
      </Figure>

      <p>
        The oldest rule in trading is <em>trade with the trend</em>. Buying a stock in a clean uptrend puts the odds on
        your side; fighting a downtrend is how most beginners lose money. Draw a line connecting the lows (in an
        uptrend) or the highs (in a downtrend) — as long as price respects that line, the trend is intact.
      </p>

      <h2>Building block 2: support and resistance</h2>
      <p>
        <strong>Support</strong> is a price level where buyers have repeatedly stepped in and stopped the fall.{" "}
        <strong>Resistance</strong> is the opposite — a ceiling where sellers keep taking over. These levels are the
        single most useful thing on a chart, because they tell you <em>where</em> something is likely to happen.
      </p>

      <Figure caption="Price bounces between support (floor) and resistance (ceiling) until one of them finally breaks.">
        <SupportResistanceChart />
      </Figure>

      <p>
        Good entries cluster near support in an uptrend (you buy the dip with a clear level to lean on). Good exits
        cluster near resistance. And when price finally <strong>breaks through</strong> a level it had respected for
        weeks, that breakout often kicks off the next big move. Mark these levels first — they frame every decision you
        make.
      </p>

      <h2>Building block 3: volume</h2>
      <p>
        Volume — the number of shares traded — is the conviction behind a move. A breakout on heavy volume is far more
        trustworthy than one on thin volume, which often fails and reverses. Think of volume as the fuel: price can
        drift on fumes, but real moves need real participation.
      </p>

      <h2>Indicators: confirmation, not magic</h2>
      <p>
        Once you can read price, trend and levels, indicators add a layer of confirmation. Beginners pile on a dozen of
        them and end up paralysed. You really only need a couple:
      </p>
      <Ul
        items={[
          <><strong>Moving averages (MA20, MA50, MA200)</strong> — smooth out the noise and show the underlying trend. Price above the 200-day MA is generally healthy; below it, caution.</>,
          <><strong>RSI</strong> — measures momentum on a 0–100 scale. Above 70 can mean overbought, below 30 oversold — but in strong trends these can stay extreme for a while.</>,
          <><strong>MACD</strong> — flags shifts in momentum, useful for spotting when a trend is losing steam.</>,
        ]}
      />
      <p>
        The key mindset: indicators <em>confirm</em> what price is already showing you. If an indicator and price
        disagree, trust price. Indicators are derived from price — never the other way around.
      </p>

      <h2>The half of the picture charts don't show</h2>
      <p>
        Here's what most chart-reading guides leave out: the chart only tells you the <strong>technical</strong> story.
        It says nothing about whether the company is actually growing, whether it's expensive, or what professional
        analysts expect next. A stock can look perfect on the chart and still be a value trap — or be setting up for an
        earnings report that blows up your trade.
      </p>
      <p>
        That's why a complete read combines three layers: the <strong>technicals</strong> (chart), the{" "}
        <strong>fundamentals</strong> (P/E, EPS, ROE, upcoming earnings) and <strong>analyst expectations</strong>{" "}
        (price targets, ratings). Each answers a different question — timing, value, and direction bias.
      </p>

      <Figure caption="A complete read: the technical signal from the chart, plus the fundamentals and analyst targets that chart-only tools ignore.">
        <AnalysisMockup />
      </Figure>

      <h2>Putting it together: a simple checklist</h2>
      <p>Next time you open a chart, run through it in this order:</p>
      <ol>
        <li>What's the <strong>trend</strong> — up, down, or sideways?</li>
        <li>Where are the nearest <strong>support and resistance</strong> levels?</li>
        <li>Is <strong>volume</strong> confirming the current move?</li>
        <li>Do your <strong>indicators</strong> agree with price, or diverge?</li>
        <li>What do the <strong>fundamentals and analyst targets</strong> say about the bigger picture?</li>
      </ol>
      <p>
        Answer those five and you've gone from staring at noise to having an actual read — with an entry idea, a level to
        protect you, and a target.
      </p>

      <h2>The shortcut: let AI read it for you</h2>
      <p>
        Becoming genuinely fluent at this takes years of screen time. The good news is you don't have to do it alone.
        Tools like <strong>UpsideGPT</strong> read any chart from a screenshot and return the whole checklist above in
        seconds — trend, key levels, a buy/sell/wait call with entry, stop and target, plus the fundamentals and analyst
        targets that chart-only tools miss. Used well, it's not a crutch; it's the fastest way to learn what a strong
        setup actually looks like.
      </p>

      <ArticleCta />

      <ArticleFaq
        items={[
          {
            q: "What's the best timeframe for a beginner?",
            a: "Start with the daily chart. It filters out most of the intraday noise and makes trends, support and resistance much easier to see. Drop to lower timeframes only once you're comfortable.",
          },
          {
            q: "Candlestick or line chart — which should I use?",
            a: "Candlesticks. A line chart only shows the closing price, while candlesticks reveal the open, high and low too — which is where most of the useful information lives.",
          },
          {
            q: "How many indicators do I really need?",
            a: "Two or three at most. A moving average for trend and RSI for momentum will take you a long way. More indicators usually means more conflicting signals, not better decisions.",
          },
          {
            q: "Can I really learn to read charts on my own?",
            a: "Yes — the concepts are simple. What takes time is pattern recognition under real conditions. Reviewing AI-generated reads alongside your own is one of the fastest ways to build that instinct.",
          },
        ]}
      />
    </>
  );
}
