import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const runtime = "edge";

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#082158",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: 'bold',
          borderRadius: 10000
        }}
      >
        I
      </div>
    ),
    {
      ...size,
    }
  );
}
