import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import GavelIcon from "@mui/icons-material/Gavel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const capabilities = [
  {
    icon: FlightTakeoffIcon,
    title: "İhracat Gümrük İşlemleri",
    text: "Gümrük çıkış beyannamesi, evrak takibi, lojistik koordinasyonu.",
  },
  {
    icon: FlightLandIcon,
    title: "İthalat Gümrük İşlemleri",
    text: "Gümrük vergilendirme ve mevzuat danışmanlığı, beyanname işlemleri.",
  },
  {
    icon: GavelIcon,
    title: "Danışmanlık ve Proje Hizmetleri",
    text: "Ürün tarife belirleme, transit işlemler ve denetim desteği.",
  },
];

export default function Faydalarimiz() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 82px)",
        backgroundImage:
          'linear-gradient(90deg, rgba(8,31,56,0.88) 0%, rgba(8,31,56,0.68) 48%, rgba(8,31,56,0.2) 100%), url("/images/foto8.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760 }}>
          <Typography
            variant="overline"
            sx={{ color: "#d9ae60", fontWeight: 900, letterSpacing: 1.4 }}
          >
            Hakkımızda
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "4.25rem" },
              lineHeight: 1.05,
            }}
          >
            Barış Gümrük Müşavirliği
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mb: 4,
              fontSize: "1.12rem",
              lineHeight: 1.85,
              color: "#e6edf5",
            }}
          >
            Gümrük müşavirliği alanında 32 yıllık tecrübemizle,
            müşterilerimize ithalat ve ihracat işlemlerinde hızlı, güvenilir ve
            etkin çözümler sunuyoruz. Alanında uzman kadromuzla her zaman
            yanınızdayız.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#d9ae60",
              color: "#101820",
              fontWeight: 900,
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              py: 1.25,
              mb: 6,
              "&:hover": { bgcolor: "#c6922d" },
            }}
            onClick={() => navigate("/hizmetler")}
          >
            Hizmetlerimizi Görüntüle
          </Button>
        </Box>

        <Typography
          variant="h6"
          sx={{ color: "#d9ae60", fontWeight: 900, mb: 2 }}
        >
          Neler Yapıyoruz
        </Typography>
        <Grid container spacing={2.5}>
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} md={4} key={item.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                  }}
                >
                  <Icon sx={{ color: "#d9ae60", fontSize: 34, mb: 1.5 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#dce6f1", lineHeight: 1.7 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
