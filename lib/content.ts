// ─────────────────────────────────────────────────────────────
//  CENTRALIZED COPY & CONFIG
//  Change the brand name, prices, and all text here — one place.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "StockReadGPT", // ← swap the project name here once decided
  ctaPrimary: "Get started",
  appUrl: "#", // ← point to app.yourdomain.com / signup later
};

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const hero = {
  badge: "Trusted by 1,300+ active traders · 4.5★ on Trustpilot",
  title: "Pro-level stock analysis,",
  titleAccent: "in seconds.",
  titleAfter: "Just upload a screenshot.",
  subtitle:
    "Reads any stock chart and tells you exactly what to do — the trend, the key levels, and a clear plan backed by probabilities. No more second-guessing TradingView.",
  ctaSupport: "Cancel anytime — no lock-in.",
  proof: "Join 1,300+ profitable traders",
};

export const trustBar = {
  caption: "The markets and platforms serious traders follow",
};

export const valueProps = {
  title: "The AI that analyzes like a Wall Street pro — in seconds",
  subtitle:
    "Stop losing hours staring at charts unsure of your next move. Get a clear, data-backed read every time.",
  cards: [
    {
      tag: "Expertise",
      title: "Built by traders, not just engineers",
      body: "The same read a profitable analyst spots after 10 years — support & resistance, Fibonacci, RSI, moving averages and macro context — delivered instantly.",
    },
    {
      tag: "Our edge",
      title: "More than the chart",
      body: "Competitors only read the candles. We cross the technicals with real fundamentals — P/E, EPS, ROE, analyst price targets and upcoming earnings — so you see the full picture, not half of it.",
      highlight: true,
    },
    {
      tag: "Personalized",
      title: "Adapts to your style",
      body: "After a few analyses it learns whether you're a day trader or a long-term investor and tailors every read to your profile. Like a coach who actually knows you.",
    },
    {
      tag: "Clarity",
      title: "Trade with conviction",
      body: "Every analysis ends with clear scenarios and probabilities. A plan A and a plan B — so you act without the anxiety.",
    },
  ],
};

export const howItWorks = {
  title: "Get started in three simple steps",
  subtitle: "You're minutes away from your sharpest trading copilot.",
  steps: [
    {
      n: "01",
      title: "Create your account",
      time: "2 min",
      body: "Answer 5 quick questions about how you trade. The AI calibrates to your profile from the very first analysis.",
    },
    {
      n: "02",
      title: "Upload your first chart",
      time: "instant",
      body: "Drop in a screenshot of any stock. In seconds you get the trend, key zones, and two scenarios — bullish and bearish — each with a probability.",
    },
    {
      n: "03",
      title: "Act with confidence",
      time: "live",
      body: "Follow your scenario, set your entry, stop-loss and target, and track how your win rate improves over time.",
    },
  ],
};

export const demo = {
  title: "One screenshot in. A full analyst report out.",
  subtitle: "Here's what you get for every chart — instantly.",
  ticker: "AAPL",
  exchange: "NASDAQ",
  company: "Apple Inc.",
  price: "$189.42",
  change: "+1.24%",
  signal: "BUY",
  trend: "Uptrend",
  trendStrength: 7,
  confidence: 78,
  entry: "$188.90 – $189.95",
  stop: "$185.40",
  target: "$196.50",
  rr: "2:1",
  support: ["$185.50", "$182.00"],
  resistance: ["$192.00", "$196.50"],
  bull: { prob: 68, text: "Break above $192 opens the path to $196.50 on momentum." },
  bear: { prob: 32, text: "Loss of $185.50 support risks a pullback toward $182." },
  fundamentals: [
    { label: "P/E", value: "29.4" },
    { label: "EPS", value: "$6.43" },
    { label: "ROE", value: "147%" },
    { label: "Next earnings", value: "12 d" },
  ],
  analyst: { consensus: "$205", range: "$170 – $250", bullish: "82%" },
  outputs: [
    "Trend & strength",
    "Support & resistance",
    "Buy / Sell / Wait signal",
    "Entry, stop-loss & target",
    "Confidence score",
    "Bull & bear scenarios",
    "Fundamentals (P/E, EPS, ROE)",
    "Analyst consensus & targets",
    "Latest news sentiment",
  ],
};

export const pricing = {
  title: "Choose your plan",
  subtitle: "Most users earn it back on their first winning trade.",
  plans: [
    {
      name: "Monthly",
      badge: "Most popular",
      price: "$40",
      period: "/month",
      featured: true,
      features: [
        "Unlimited chart analyses",
        "Technical + fundamental + analyst data",
        "Buy / Sell / Wait signals with entry, stop & target",
        "Bull & bear scenarios with probabilities",
        "Analysis history",
        "All future updates",
      ],
    },
    {
      name: "Lifetime",
      badge: "Best value",
      price: "$180",
      period: "one-time",
      featured: false,
      features: [
        "Everything in Monthly",
        "Paid once, yours forever",
        "All future updates included",
        "Priority access to new markets",
      ],
    },
  ],
};

export const testimonials = {
  title: "What 1,300+ traders are saying",
  subtitle: "Real results from real users.",
  rating: "4.5 out of 5 on Trustpilot",
  items: [
    { name: "Marcus T.", role: "Day trader", img: 11, quote: "First day using it and I was already greener than my whole last month." },
    { name: "Sofia R.", role: "Swing trader", img: 5, quote: "It does the chart work for me — I just check the plan and act. Massive time-saver." },
    { name: "James K.", role: "Investor", img: 33, quote: "The fundamentals layer is what sold me. No other tool gives me the full picture." },
    { name: "Aisha M.", role: "Part-time trader", img: 9, quote: "Went from guessing to having an actual plan A and plan B on every trade." },
    { name: "Daniel P.", role: "Beginner", img: 60, quote: "Three days in and already more confident on every single entry." },
    { name: "Elena V.", role: "Day trader", img: 16, quote: "The probability scenarios changed how I size my positions. Game changer." },
  ],
};

export const faq = {
  title: "Frequently asked questions",
  items: [
    {
      q: "What exactly is it?",
      a: "An AI that reads any US or UK stock chart from a screenshot and gives you a complete, pro-grade analysis in seconds — technicals, fundamentals, and a clear action plan.",
    },
    {
      q: "Does it actually work?",
      a: "It combines proven technical analysis with real fundamental and analyst data. It won't promise the future — it gives you a sharper, faster, data-backed read so you decide with an edge.",
    },
    {
      q: "I'm a beginner — is it for me?",
      a: "Yes. It does the heavy analysis for you and explains every scenario in plain language, so you learn while you trade.",
    },
    {
      q: "Which markets and assets does it cover?",
      a: "Stocks across the major global exchanges, with live price, fundamentals, analyst targets and news.",
    },
    {
      q: "How fast is an analysis?",
      a: "Seconds. Upload a screenshot and the full report comes back almost instantly.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes — no lock-in, no commitment. Cancel in one click whenever you want.",
    },
  ],
};

export const finalCta = {
  title: "Ready to read the market like a pro?",
  subtitle:
    "Join 1,300+ traders who turned guesswork into a data-backed plan.",
};

export const footer = {
  tagline: "The AI stock analyst that gives you an edge in the markets.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#how" },
        { label: "Pricing", href: "#pricing" },
        { label: "Reviews", href: "#reviews" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Risk Disclosure", href: "#" },
      ],
    },
  ],
  disclaimer:
    "This is an AI-powered analysis tool for educational and informational purposes only. Nothing here is financial advice. Trading and investing involve significant risk of loss. Past performance is not indicative of future results.",
};
