import { ImageResponse } from "next/og";
import { metaTitle, roleSubtitle, site } from "@/lib/site";

export const alt = `${site.name} — ${metaTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #08070f 0%, #12101f 45%, #0d1a1a 100%)",
          color: "#f4f0f7",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "2px solid #34d399",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              color: "#34d399",
            }}
          >
            SB
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>Portfolio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.25, color: "#a7f3d0", maxWidth: 900 }}>
            {roleSubtitle}
          </div>
          <div style={{ fontSize: 24, lineHeight: 1.4, color: "#c4b5fd", maxWidth: 920 }}>
            {metaTitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#94a3b8" }}>
          <span>{site.location}</span>
          <span>Swift · Laravel · REST APIs</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
