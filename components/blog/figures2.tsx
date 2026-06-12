/* Extra illustration motifs for blog articles (dark theme, green accent). */

export function CandlePatterns() {
  const Label = ({ x, t }: { x: number; t: string }) => (
    <text x={x} y={196} fill="#a3a3a3" fontSize="12" textAnchor="middle">{t}</text>
  );
  return (
    <svg viewBox="0 0 480 210" className="mx-auto w-full max-w-lg" role="img" aria-label="Common candlestick patterns: doji, hammer and bullish engulfing">
      {/* Doji */}
      <line x1="80" y1="30" x2="80" y2="170" stroke="#a3a3a3" strokeWidth="1.5" />
      <rect x="68" y="98" width="24" height="6" fill="#a3a3a3" />
      <Label x={80} t="Doji" />
      {/* Hammer */}
      <line x1="220" y1="40" x2="220" y2="175" stroke="#1fd96b" strokeWidth="1.5" />
      <rect x="207" y="50" width="26" height="34" rx="2" fill="#1fd96b" />
      <Label x={220} t="Hammer" />
      {/* Bullish engulfing */}
      <line x1="345" y1="70" x2="345" y2="150" stroke="#f87171" strokeWidth="1.5" />
      <rect x="334" y="92" width="22" height="42" rx="2" fill="#f87171" opacity="0.8" />
      <line x1="385" y1="50" x2="385" y2="165" stroke="#1fd96b" strokeWidth="1.5" />
      <rect x="372" y="70" width="26" height="78" rx="2" fill="#1fd96b" />
      <Label x={372} t="Bullish engulfing" />
    </svg>
  );
}

export function Breakout() {
  return (
    <svg viewBox="0 0 520 240" className="mx-auto w-full max-w-xl" role="img" aria-label="Price breaking out above resistance on rising volume">
      {/* resistance */}
      <line x1="20" y1="70" x2="500" y2="70" stroke="#f87171" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="20" y="60" fill="#f87171" fontSize="12" fontWeight="600">Resistance</text>
      {/* price: ranges under resistance then breaks out */}
      <polyline points="20,150 70,110 120,150 170,95 220,140 270,100 320,120 360,75 400,45 440,30 490,20" fill="none" stroke="#e5e5e5" strokeWidth="2" />
      {/* breakout arrow */}
      <path d="M400 45 L430 25 M420 25 L430 25 L430 35" fill="none" stroke="#1fd96b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="410" y="18" fill="#1fd96b" fontSize="12" fontWeight="700">Breakout</text>
      {/* volume bars */}
      {[40, 90, 140, 190, 240, 290, 340, 380, 420, 460].map((x, i) => (
        <rect key={i} x={x} y={i >= 7 ? 175 : 205} width="14" height={i >= 7 ? 55 : 25} rx="1" fill={i >= 7 ? "#1fd96b" : "#3f3f46"} opacity={i >= 7 ? 0.9 : 0.6} />
      ))}
      <text x="20" y="232" fill="#a3a3a3" fontSize="11">Volume confirms the move</text>
    </svg>
  );
}

export function ScreenshotToReport() {
  return (
    <svg viewBox="0 0 520 200" className="mx-auto w-full max-w-xl" role="img" aria-label="Upload a chart screenshot and get an AI analysis report">
      {/* screenshot */}
      <rect x="20" y="40" width="170" height="120" rx="10" fill="#ffffff" opacity="0.04" stroke="#ffffff" strokeOpacity="0.12" />
      <polyline points="40,130 70,100 100,115 130,75 160,95" fill="none" stroke="#e5e5e5" strokeWidth="2" opacity="0.7" />
      <text x="105" y="178" fill="#a3a3a3" fontSize="12" textAnchor="middle">Chart screenshot</text>
      {/* arrow */}
      <path d="M210 100 L300 100 M285 90 L300 100 L285 110" fill="none" stroke="#1fd96b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* report */}
      <rect x="320" y="40" width="180" height="120" rx="10" fill="#1fd96b" opacity="0.06" stroke="#1fd96b" strokeOpacity="0.3" />
      <rect x="336" y="56" width="70" height="22" rx="6" fill="#1fd96b" />
      <text x="371" y="71" fill="#0a0a0b" fontSize="12" fontWeight="700" textAnchor="middle">BUY</text>
      <rect x="336" y="90" width="148" height="10" rx="3" fill="#ffffff" opacity="0.12" />
      <rect x="336" y="108" width="120" height="10" rx="3" fill="#ffffff" opacity="0.12" />
      <rect x="336" y="126" width="148" height="10" rx="3" fill="#ffffff" opacity="0.12" />
      <text x="410" y="178" fill="#a3a3a3" fontSize="12" textAnchor="middle">AI analysis</text>
    </svg>
  );
}

export function ThreeLayers() {
  const Row = ({ y, label, value, hot }: { y: number; label: string; value: string; hot?: boolean }) => (
    <g>
      <rect x="40" y={y} width="440" height="48" rx="10" fill={hot ? "#1fd96b" : "#ffffff"} opacity={hot ? 0.1 : 0.04} stroke={hot ? "#1fd96b" : "#ffffff"} strokeOpacity={hot ? 0.4 : 0.1} />
      <circle cx="68" cy={y + 24} r="6" fill={hot ? "#1fd96b" : "#a3a3a3"} />
      <text x="90" y={y + 22} fill="#ffffff" fontSize="15" fontWeight="700">{label}</text>
      <text x="90" y={y + 39} fill="#a3a3a3" fontSize="12">{value}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 520 200" className="mx-auto w-full max-w-xl" role="img" aria-label="A complete read combines technical, fundamental and analyst layers">
      <Row y={10} label="Technical" value="Trend, levels, signal" />
      <Row y={72} label="Fundamentals" value="P/E, EPS, ROE, earnings" hot />
      <Row y={134} label="Analyst expectations" value="Price targets, ratings" />
    </svg>
  );
}
