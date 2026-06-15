import React from "react";
import { Box, Typography } from "@mui/material";

export default function ScrollIndicator() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        right: { md: 22, lg: 34 },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        color: "rgba(16, 34, 53, 0.55)",
        pointerEvents: "none",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: 2.2,
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        Scroll
      </Typography>
      <Box
        sx={{
          width: 1,
          height: 92,
          bgcolor: "rgba(16, 34, 53, 0.22)",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 34,
            bgcolor: "#c6922d",
            animation: "scrollLine 1.8s ease-in-out infinite",
          },
          "@keyframes scrollLine": {
            "0%": { transform: "translateY(-100%)" },
            "55%": { transform: "translateY(92px)" },
            "100%": { transform: "translateY(92px)" },
          },
        }}
      />
    </Box>
  );
}
