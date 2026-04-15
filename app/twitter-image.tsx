import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 0% 100%, rgba(20,184,166,0.4), transparent 32%), radial-gradient(circle at 100% 0%, rgba(14,165,233,0.45), transparent 34%), linear-gradient(135deg, #0d2037 0%, #143d66 100%)",
          color: "#f8fafc",
          padding: "52px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 26, opacity: 0.85, letterSpacing: 4 }}>ISG360</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
            ISG operasyonunu veriyle guclendirin
          </div>
          <div style={{ fontSize: 28, opacity: 0.92 }}>
            OSGB, Kobi-Kamu ve bireysel uzmanlar icin tek platform.
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.8 }}>Demo planla: /demo-talep</div>
      </div>
    ),
    size,
  );
}
