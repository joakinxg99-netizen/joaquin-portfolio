import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Joaquín G. Bravo — Creative Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", "joaquin.jpg"));
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
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
            "radial-gradient(circle at 20% 20%, rgba(107,226,255,0.26), transparent 34%), radial-gradient(circle at 84% 18%, rgba(109,94,247,0.18), transparent 32%), radial-gradient(circle at 58% 88%, rgba(255,180,87,0.12), transparent 30%), linear-gradient(135deg, #0B0B0C 0%, #141416 48%, #0B0B0C 100%)",
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
              width: 132,
              height: 88,
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
                "linear-gradient(90deg, #6BE2FF 0%, #ffffff 52%, #FFB457 100%)",
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
            Joaquín G. Bravo
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
            Creative Developer • Premium Websites
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
            boxShadow: "0 44px 130px rgba(11,11,12,0.48)",
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
