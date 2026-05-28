import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "JØA BRAV — Web Developer and Techno Producer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", "joaquin.jpg"));
  const logo = await readFile(join(process.cwd(), "public", "joabrav-logo.png"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 20% 20%, rgba(45,212,191,0.28), transparent 34%), radial-gradient(circle at 84% 18%, rgba(244,114,182,0.18), transparent 32%), linear-gradient(135deg, #06070a 0%, #11131a 48%, #07080b 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            style={{
              width: 112,
              height: 74,
              objectFit: "contain",
              marginBottom: 22,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 88,
              height: 2,
              marginBottom: 34,
              background:
                "linear-gradient(90deg, #99f6e4 0%, #ffffff 52%, #fbcfe8 100%)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 0.96,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            JØA BRAV
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 35,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Web Developer • Techno Producer
          </div>
          <div
            style={{
              marginTop: 42,
            display: "flex",
            gap: 12,
              color: "rgba(255,255,255,0.62)",
              fontSize: 21,
              textTransform: "uppercase",
              letterSpacing: "5px",
            }}
          >
            joabrav.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 360,
            height: 456,
            borderRadius: 42,
            padding: 14,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 44px 130px rgba(0,0,0,0.48)",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 30,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
