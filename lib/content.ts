// ─────────────────────────────────────────────────────────────
//  CENTRALIZED COPY & CONFIG
//  Change the brand name, prices, and all text here — one place.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "UpsideGPT",
  ctaPrimary: "Get started",
  appUrl: "#", // ← point to app.yourdomain.com / signup later
};

export const nav = {
  links: [
    { label: "How it works", href: "/#how" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
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
  sector: "Technology · Consumer Electronics",
  price: "$291.13",
  change: "-1.66%",
  bias: "Short / long divergence",
  tradeType: "SELL LIMIT",
  entry: "$294.93",
  stop: "$302.56",
  tp1: "$278.76",
  tp2: "$259.87",
  rr: "2.12:1",
  trend: "Uptrend",
  trendStrength: 8,
  adx: "35.1",
  rsi: "34.2",
  confidence: 55,
  bull: { prob: 30, text: "Break above $303.88 (SMA20) shifts momentum to the upside." },
  bear: { prob: 70, text: "A loss of $285.49 (SMA50) opens downside toward $270." },
  fundamentals: [
    { label: "P/E", value: "34.9" },
    { label: "EPS", value: "$8.33" },
    { label: "ROE", value: "146.7%" },
    { label: "D/E", value: "0.8" },
  ],
  earnings: [
    { date: "Apr 30", result: "BEAT", pct: "+3.1%" },
    { date: "Jan 29", result: "BEAT", pct: "+6.7%" },
  ],
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
      badge: "Popular",
      price: "$40",
      period: "/month",
      tagline: "Instant access to the AI that reads the full picture.",
      featured: true,
      features: [
        "Unlimited chart analyses",
        "Technical + fundamental + analyst data",
        "Buy / Sell / Wait signals with entry, stop & target",
        "Bull & bear scenarios with probabilities",
        "Analysis history",
        "Guides and tutorials",
        "All future updates",
      ],
    },
    {
      name: "Lifetime",
      badge: "Best value",
      price: "$180",
      period: "one-time payment",
      tagline: "Instant access to the AI that reads the full picture.",
      featured: false,
      features: [
        "Everything in Monthly",
        "Human WhatsApp support (mentoring depending on profile)",
        "Paid once — yours forever, all updates included",
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
      a: "An AI that reads any stock chart from a screenshot and hands you a complete, pro-grade analysis in seconds — trend, key levels, a clear buy/sell/wait call, plus the fundamentals and analyst targets behind the move. The full picture, not just the candles.",
    },
    {
      q: "Is it actually accurate?",
      a: "It won't predict the future — nobody can. What it does is cross-check proven technical analysis with real fundamentals and analyst data, giving you a faster, sharper, data-backed read than you'd ever get staring at a chart alone. Better inputs, better decisions.",
    },
    {
      q: "I already use TradingView — why this?",
      a: "You don't switch, you screenshot. TradingView shows you the chart; we tell you what to do with it — the levels, the scenarios with probabilities, and the context most traders miss. Seconds instead of hours of second-guessing.",
    },
    {
      q: "I'm a complete beginner — is it for me?",
      a: "Especially. It does the heavy analysis for you and explains every call in plain English, so you act on a plan instead of a guess — and learn the patterns as you go.",
    },
    {
      q: "Which markets does it cover?",
      a: "Stocks across the major global exchanges, with live price, fundamentals, analyst targets and news. If it's a listed stock, you can read it.",
    },
    {
      q: "What if it's not for me?",
      a: "Cancel in one click, anytime — no lock-in, no contract. Most users make the cost back on a single winning trade, but if it's not for you, you're never stuck.",
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
        { label: "How it works", href: "/#how" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Reviews", href: "/#reviews" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#" },
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
