"use client";

import { Box, useTheme } from "@mui/material";
import Image from "next/image";

export const FramedImage: React.FC<{ src: string, alt: string, priority?: boolean }> = ({ src, alt, priority }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        my: "58px",
        mx: "auto",
        aspectRatio: "10/12",
        width: "100%",
        maxWidth: "460px",
      }}
    >
      <Box sx={{ inset: 28, position: "absolute" }}>
        <Image
          src={src}
          fill
          alt={alt}
          sizes={`${theme.breakpoints.down("sm")} 100vw, ${theme.breakpoints.up(
            "sm"
          )} 460px`}
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </Box>
      <Box
        sx={{
          width: 150,
          height: 150,
          position: "absolute",
          top: 0,
          right: 0,
          borderStyle: "solid",
          borderWidth: 0,
          borderTopWidth: 5,
          borderRightWidth: 5,
          borderColor: "black",
        }}
      />
      <Box
        sx={{
          width: 150,
          height: 150,
          position: "absolute",
          bottom: 0,
          left: 0,
          borderStyle: "solid",
          borderWidth: 0,
          borderBottomWidth: 5,
          borderLeftWidth: 5,
          borderColor: "black",
        }}
      />
    </Box>
  );
};
