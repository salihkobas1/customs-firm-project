import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#081f38", color: "#dce6f1", mt: "auto" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 900, color: "#fff" }}>
            Barış Gümrükleme
          </Typography>
          <Typography variant="body2" sx={{ color: "#9fb0c2", mt: 0.5 }}>
            İzmir Gümrükleme ve Danışmanlık Hizmetleri
          </Typography>
        </Box>

        <Divider
          flexItem
          orientation="vertical"
          sx={{ display: { xs: "none", sm: "block" }, borderColor: "rgba(255,255,255,0.16)" }}
        />

        <Typography variant="body2" sx={{ color: "#9fb0c2" }}>
          © 2025 Barış Gümrük Müşavirliği
        </Typography>
      </Container>
    </Box>
  );
}
