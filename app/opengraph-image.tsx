import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 10% 20%, rgba(20,184,166,0.45), transparent 28%), radial-gradient(circle at 90% 0%, rgba(14,165,233,0.42), transparent 30%), linear-gradient(135deg, #0b1726 0%, #0f2742 55%, #123357 100%)",
          padding: "60px",
          color: "#f8fafc",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          ISG360 Platform
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
            Is sagligi ve guvenliginde yeni nesil operasyon
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            Risk, egitim ve dokuman surecleri tek merkezde.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>isg360.com</div>
      </div>
    ),
    size,
  );
}
