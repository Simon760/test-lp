import { ImageResponse } from "next/og";
import { brand } from "@/lib/content";

export const dynamic = "force-static";
export const alt = "UpsideGPT — AI stock analysis in seconds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(31,217,107,0.25), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              backgroundColor: "#1fd96b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0a0a0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="15 7 21 7 21 13" />
            </svg>
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff" }}>{brand.name}</div>
        </div>
        <div style={{ marginTop: 36, fontSize: 36, color: "#a3a3a3", textAlign: "center" }}>
          Pro-level stock analysis, in seconds.
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 36,
            color: "#1fd96b",
            fontWeight: 700,
          }}
        >
          Just upload a screenshot.
        </div>
      </div>
    ),
    { ...size }
  );
}
