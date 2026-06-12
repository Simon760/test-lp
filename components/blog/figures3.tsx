/* More distinct inline illustration motifs so articles don't reuse the same art. */

/* A reversal candle pattern sitting right on a support level. */
export function PatternAtLevel() {
  return (
    <svg viewBox="0 0 520 220" className="mx-auto w-full max-w-xl" role="img" aria-label="A bullish engulfing pattern forming at support">
      <line x1="20" y1="160" x2="500" y2="160" stroke="#1fd96b" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="20" y="182" fill="#1fd96b" fontSize="12" fontWeight="600">Support</text>
      {/* price drifting down to support */}
      <polyline points="30,60 90,90 150,80 210,120 270,150 320,158" fill="none" stroke="#e5e5e5" strokeWidth="2" opacity="0.7" />
      {/* small red candle then engulfing green at the level */}
      <line x1="350" y1="120" x2="350" y2="175" stroke="#f87171" strokeWidth="1.5" />
      <rect x="339" y="135" width="22" height="30" rx="2" fill="#f87171" opacity="0.8" />
      <line x1="392" y1="95" x2="392" y2="178" stroke="#1fd96b" strokeWidth="1.5" />
      <rect x="379" y="115" width="26" height="55" rx="2" fill="#1fd96b" />
      <path d="M430 120 L460 95 M450 95 L460 95 L460 105" fill="none" stroke="#1fd96b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="300" y="40" fill="#a3a3a3" fontSize="12">Reversal at the level &gt; reversal anywhere</text>
    </svg>
  );
}

/* Role reversal: a broken resistance level becomes new support. */
export function RoleReversal() {
  return (
    <svg viewBox="0 0 520 220" className="mx-auto w-full max-w-xl" role="img" aria-label="A broken resistance level flips to become support">
      <line x1="20" y1="110" x2="500" y2="110" stroke="#a3a3a3" strokeWidth="1.5" />
      <text x="20" y="100" fill="#f87171" fontSize="12" fontWeight="600">Old resistance</text>
      <text x="360" y="128" fill="#1fd96b" fontSize="12" fontWeight="600">New support</text>
      {/* price breaks above, pulls back to the level, bounces */}
      <polyline points="30,150 80,120 130,135 175,90 220,60 270,95 320,108 360,80 410,60 460,40" fill="none" stroke="#e5e5e5" strokeWidth="2" />
      <circle cx="320" cy="108" r="5" fill="#1fd96b" />
      <text x="150" y="40" fill="#a3a3a3" fontSize="12">Break, retest, continue</text>
    </svg>
  );
}

/* A trade plan: entry zone, stop-loss, take-profit with a risk:reward note. */
export function RiskReward() {
  return (
    <svg viewBox="0 0 520 230" className="mx-auto w-full max-w-xl" role="img" aria-label="A trade plan with entry, stop-loss and take-profit zones">
      {/* take-profit zone */}
      <rect x="20" y="20" width="480" height="48" fill="#1fd96b" opacity="0.1" />
      <text x="30" y="48" fill="#1fd96b" fontSize="12" fontWeight="600">Take-profit  $196.50</text>
      {/* entry zone */}
      <rect x="20" y="96" width="480" height="34" fill="#ffffff" opacity="0.05" />
      <text x="30" y="118" fill="#e5e5e5" fontSize="12" fontWeight="600">Entry  $188.90</text>
      {/* stop zone */}
      <rect x="20" y="160" width="480" height="48" fill="#f87171" opacity="0.1" />
      <text x="30" y="188" fill="#f87171" fontSize="12" fontWeight="600">Stop-loss  $185.40</text>
      {/* price line into entry */}
      <polyline points="20,150 90,120 160,135 230,112 300,115 360,112" fill="none" stroke="#e5e5e5" strokeWidth="2" opacity="0.7" />
      <rect x="404" y="92" width="92" height="42" rx="8" fill="#1fd96b" opacity="0.15" stroke="#1fd96b" strokeOpacity="0.4" />
      <text x="450" y="112" fill="#1fd96b" fontSize="13" fontWeight="700" textAnchor="middle">R:R 2:1</text>
      <text x="450" y="126" fill="#a3a3a3" fontSize="10" textAnchor="middle">reward vs risk</text>
    </svg>
  );
}

/* A fundamentals panel — the data chart-only tools ignore. */
export function FundamentalsPanel() {
  const Stat = ({ x, k, v }: { x: number; k: string; v: string }) => (
    <g>
      <rect x={x} y="40" width="110" height="70" rx="10" fill="#ffffff" opacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
      <text x={x + 16} y="70" fill="#a3a3a3" fontSize="12">{k}</text>
      <text x={x + 16} y="96" fill="#ffffff" fontSize="20" fontWeight="700">{v}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 520 170" className="mx-auto w-full max-w-xl" role="img" aria-label="Fundamentals: P/E, EPS, ROE and next earnings date">
      <Stat x={20} k="P/E" v="29.4" />
      <Stat x={148} k="EPS" v="$6.43" />
      <Stat x={276} k="ROE" v="147%" />
      <g>
        <rect x="404" y="40" width="96" height="70" rx="10" fill="#1fd96b" opacity="0.08" stroke="#1fd96b" strokeOpacity="0.35" />
        <text x="420" y="70" fill="#1fd96b" fontSize="12">Earnings</text>
        <text x="420" y="96" fill="#ffffff" fontSize="20" fontWeight="700">12 d</text>
      </g>
      <text x="20" y="140" fill="#a3a3a3" fontSize="12">A perfect chart can&apos;t see an earnings report two days away.</text>
    </svg>
  );
}

/* Analyst price-target range: low, consensus, high vs current price. */
export function AnalystTargets() {
  return (
    <svg viewBox="0 0 520 170" className="mx-auto w-full max-w-xl" role="img" aria-label="Analyst price targets: low, consensus and high versus current price">
      <line x1="40" y1="90" x2="480" y2="90" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="6" strokeLinecap="round" />
      {/* consensus fill from low to consensus */}
      <line x1="40" y1="90" x2="300" y2="90" stroke="#1fd96b" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
      {/* low */}
      <circle cx="40" cy="90" r="6" fill="#a3a3a3" />
      <text x="40" y="68" fill="#a3a3a3" fontSize="12" textAnchor="middle">$170</text>
      <text x="40" y="120" fill="#a3a3a3" fontSize="11" textAnchor="middle">Low</text>
      {/* consensus */}
      <circle cx="300" cy="90" r="7" fill="#1fd96b" />
      <text x="300" y="66" fill="#1fd96b" fontSize="14" fontWeight="700" textAnchor="middle">$205</text>
      <text x="300" y="120" fill="#1fd96b" fontSize="11" textAnchor="middle">Consensus</text>
      {/* high */}
      <circle cx="480" cy="90" r="6" fill="#a3a3a3" />
      <text x="480" y="68" fill="#a3a3a3" fontSize="12" textAnchor="middle">$250</text>
      <text x="480" y="120" fill="#a3a3a3" fontSize="11" textAnchor="middle">High</text>
      {/* current price marker */}
      <line x1="200" y1="74" x2="200" y2="106" stroke="#ffffff" strokeWidth="2" />
      <text x="200" y="146" fill="#e5e5e5" fontSize="11" textAnchor="middle">Today $189</text>
    </svg>
  );
}
