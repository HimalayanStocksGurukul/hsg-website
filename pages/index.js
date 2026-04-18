export default function Home() {
  return (
    <div style={{ background: "#0b0f1a", color: "white", fontFamily: "Arial" }}>
      
      <header style={{
        background: "#111827",
        padding: "20px",
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "bold"
      }}>
        🚀 Himalayan Stocks Gurukul
      </header>

      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "40px", color: "#22c55e" }}>
          Master the Markets
        </h1>
        <p>
          Advanced Stock Market Insights | Nifty | Bank Nifty | Global Trends
        </p>
      </div>

      {/* Market Section */}
      <div style={{ padding: "20px" }}>
        <h2>🔥 Today's Market Pulse</h2>
        <p>Nifty Trend: <span style={{ color: "#22c55e" }}>Bullish</span></p>
        <p>Bank Nifty: <span style={{ color: "#facc15" }}>Sideways</span></p>
      </div>

      {/* Videos */}
      <div style={{ padding: "20px" }}>
        <h2>📺 Latest Videos</h2>

      <iframe
  width="100%"
  height="250"
  src="https://www.youtube.com/embed/F3dNXqhD5uU"
  allowFullScreen
></iframe>

<iframe
  width="100%"
  height="250"
  src="https://www.youtube.com/embed/6xLaK-i_U2g"
  allowFullScreen
></iframe>

<iframe
  width="100%"
  height="250"
  src="https://www.youtube.com/embed/VhSupMIPJNk"
  allowFullScreen
></iframe>
      </div>

      {/* Live Market */}
      <div style={{ padding: "20px" }}>
        <h2>📊 Live Market</h2>

        <iframe
  src="https://www.tradingview.com/widgetembed/?symbol=NSE%3ANIFTY&interval=5&theme=dark"
  width="100%"
  height="400"
  frameBorder="0"
></iframe>
      </div>

    </div>
  );
}
