import React from "react";
import CustomSlider from "../components/Slider";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LanguageIcon from "@mui/icons-material/Language";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PolicyIcon from "@mui/icons-material/Policy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import CurrencyConverter from "../components/CurrencyConverter";

const kpiItems = [
  { value: "35000+", label: "TAMAMLANAN İŞLEM", icon: FactCheckIcon },
  { value: "130+", label: "GÜMRÜKLEME YAPILAN ÜLKE", icon: LanguageIcon },
  { value: "35+", label: "TECRÜBE YILI", icon: HourglassTopIcon },
  { value: "%99", label: "MÜŞTERİ MEMNUNİYETİ", icon: VolunteerActivismIcon },
];

const serviceItems = [
  {
    title: "Demiryolu Taşımacılığı",
    text:
      "Alternatif ve ekonomik taşımalarınızda demiryolu gümrük işlemlerini profesyonelce yürütüyoruz.",
    icon: DirectionsRailwayIcon,
  },
  {
    title: "Deniz Taşımacılığı",
    text:
      "Konteyner ve parsiyel yükleriniz için liman süreçlerini kapsayan güvenilir gümrükleme çözümleri sağlıyoruz.",
    icon: DirectionsBoatIcon,
  },
  {
    title: "Hava Taşımacılığı",
    text:
      "Zaman hassasiyeti yüksek gönderileriniz için hızlı, mevzuata tam uyumlu havayolu gümrükleme hizmeti sunuyoruz.",
    icon: FlightTakeoffIcon,
  },
  {
    title: "Kara Taşımacılığı",
    text:
      "Avrupa ve bölgesel taşımalarınızda sınır geçiş süreçlerini sorunsuz ve eksiksiz şekilde yönetiyoruz.",
    icon: LocalShippingIcon,
  },
];

const featureTiles = [
  {
    title: "Mevzuata Tam Uyum",
    text:
      "Güncel gümrük mevzuatına hakim uzman ekibimizle tüm işlemleri eksiksiz ve doğru şekilde yürütüyoruz.",
    icon: PolicyIcon,
    tone: "light",
  },
  {
    title: "Uzman Danışmanlık",
    text:
      "Her müşterimize özel yaklaşım sunar, gümrükleme sürecini baştan sona profesyonelce yönetiriz.",
    icon: SupportAgentIcon,
    tone: "soft",
  },
  {
    title: "Hızlı ve Güvenilir İşlem",
    text:
      "Zaman kaybını önleyen operasyon yapımızla gümrük işlemlerini planlı ve sorunsuz şekilde tamamlarız.",
    icon: SpeedIcon,
    tone: "dark",
  },
  {
    title: "Risk ve Ceza Yönetimi",
    text:
      "Olası ceza ve riskleri önceden analiz eder, firmanız için güvenli ve kontrollü bir süreç sağlarız.",
    icon: SecurityIcon,
    tone: "red",
  },
];

const values = [
  {
    title: "Vizyonumuz",
    icon: VisibilityIcon,
    text:
      "Gümrük süreçlerinde teknolojik gelişmeleri yakından takip ederek dijitalleşmeyi tüm hizmet süreçlerine entegre eden, müşterilerine hızlı, güvenilir ve sürdürülebilir çözümler sunan lider bir firma olmaktır. Sektörde yeniliklerin öncüsü olmayı hedefliyoruz.",
  },
  {
    title: "Misyonumuz",
    icon: FlagIcon,
    text:
      "Müşterilerimizin dış ticaret süreçlerini hızlandırmak, yasal mevzuatlara tam uyum sağlayarak hata payını en aza indirmek, operasyonel verimliliği artırmak ve güvene dayalı uzun vadeli iş birlikleri kurmak. Gümrük müşavirliği alanında kalite standartlarını yükseltmek için çalışıyoruz.",
  },
  {
    title: "Uzman Ekibimiz",
    icon: GroupsIcon,
    text:
      "Alanında deneyimli, mevzuata hakim ve sürekli eğitimlerle güncel bilgileri takip eden uzman kadromuzla her zaman yanınızdayız. Ekibimiz, her müşterimize özel çözümler üretmek ve işlemleri hızlı bir şekilde sonuçlandırmak için koordineli ve disiplinli bir şekilde çalışır.",
  },
];

function KpiRibbon() {
  return (
    <Box
      sx={{
        mt: { xs: 7, md: 9 },
        backgroundImage:
          'linear-gradient(rgba(219, 30, 23, 0.9), rgba(219, 30, 23, 0.9)), url("/Slider2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {kpiItems.map((item) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} sm={6} md={3} key={item.label}>
                <Box
                  sx={{
                    minHeight: 210,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Icon sx={{ fontSize: 42, mb: 3 }} />
                  <Typography
                    sx={{
                      fontSize: { xs: "2.6rem", md: "3.35rem" },
                      lineHeight: 1,
                      fontWeight: 950,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography sx={{ mt: 2, fontSize: "1rem", fontWeight: 700 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

function ServicesShowcase() {
  return (
    <Box sx={{ mt: { xs: 7, md: 9 }, bgcolor: "#1b2d38", color: "#fff", py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography variant="overline" sx={{ letterSpacing: 1.6, color: "#e9eef3" }}>
            NE YAPIYORUZ
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 950, mt: 1, fontSize: { xs: "2.6rem", md: "3.8rem" } }}
          >
            Hizmetlerimiz
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            columnGap: { sm: 5, lg: 8 },
            rowGap: 6,
            alignItems: "start",
          }}
        >
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <Box sx={{ textAlign: "center" }} key={item.title}>
                <Box
                  sx={{
                    width: 116,
                    height: 116,
                    mx: "auto",
                    mb: 3,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(0,0,0,0.14)",
                    boxShadow:
                      "inset 0 0 0 8px rgba(0,0,0,0.06), 0 12px 30px rgba(0,0,0,0.16)",
                  }}
                >
                  <Icon sx={{ color: "#ff3b2f", fontSize: 42 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 500, mb: 3, lineHeight: 1.35, minHeight: 68 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#9fb4c5", lineHeight: 1.9, fontSize: "1.02rem" }}>
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

function FeatureTiles() {
  return (
    <Box
      sx={{
        mt: { xs: 7, md: 9 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
        },
      }}
    >
        {featureTiles.map((item) => {
          const Icon = item.icon;
          const isDark = item.tone === "dark";
          const isRed = item.tone === "red";

          return (
            <Box
              key={item.title}
              sx={{
                minHeight: 350,
                px: { xs: 4, md: 5 },
                py: 6,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: isRed
                  ? "#de4c43"
                  : isDark
                    ? "#1b2d38"
                    : item.tone === "soft"
                      ? "#f2f0ed"
                      : "#ffffff",
                color: isRed ? "#fff" : isDark ? "#9fb4c5" : "#5f6670",
              }}
            >
              <Icon sx={{ color: isRed ? "#fff" : "#ff3b2f", fontSize: 48, mb: 4 }} />
              <Typography
                sx={{
                  fontWeight: 900,
                  mb: 2.5,
                  color: isRed ? "#9fb4c5" : isDark ? "#9fb4c5" : "#5f6670",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1.85,
                  fontSize: "1.05rem",
                  color: isRed ? "#fff" : "inherit",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
}

export default function Hakkimizda() {
  return (
    <>
      <CustomSlider />

      <Box sx={{ bgcolor: "#f5f7fa", pb: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mt: { xs: 3, md: 5 }, position: "relative", zIndex: 5 }}>
            <CurrencyConverter />
          </Box>

          <Grid container spacing={5} alignItems="stretch" sx={{ mt: { xs: 5, md: 7 } }}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: "#0a2c51",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "#d9ae60", fontWeight: 900, letterSpacing: 1 }}
                >
                  Hakkımızda
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 950,
                    mt: 1,
                    mb: 2,
                    lineHeight: 1.1,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                  }}
                >
                  32 yıllık tecrübeyle dış ticaret süreçlerinizde yanınızdayız.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#dce6f1", fontSize: "1.08rem", lineHeight: 1.8 }}
                >
                  32 yıllık tecrübemizle sizlere en kaliteli hizmeti sunmak için
                  çalışıyoruz.
                </Typography>

                <Stack spacing={1.5} sx={{ mt: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <VerifiedIcon sx={{ color: "#d9ae60" }} />
                    <Typography sx={{ fontWeight: 800 }}>Güvenilir operasyon yönetimi</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <PublicIcon sx={{ color: "#d9ae60" }} />
                    <Typography sx={{ fontWeight: 800 }}>Uluslararası mevzuat uyumu</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4.5 },
                  borderRadius: 3,
                  border: "1px solid rgba(16, 34, 53, 0.1)",
                  bgcolor: "#ffffff",
                  boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
                }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.12rem", lineHeight: 1.9, color: "#334155" }}
                >
                  Gümrük müşavirliği alanında uzman kadromuzla,
                  müşterilerimize ithalat ve ihracat işlemlerinde hızlı,
                  güvenilir ve etkin çözümler sunmaktayız. Yılların verdiği
                  tecrübe ile sektörde öncü konumda bulunmaktan gurur duyuyoruz.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.12rem", lineHeight: 1.9, color: "#334155" }}
                >
                  Firmamız, Türkiye'nin dört bir yanındaki müşterilerine kişiye
                  özel danışmanlık hizmeti verirken aynı zamanda uluslararası
                  mevzuatlara da tam uyum sağlar. Müşteri memnuniyetini temel
                  ilke edinen anlayışımızla, işlemlerinizin her aşamasında
                  yanınızdayız.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <KpiRibbon />

        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ mt: { xs: 7, md: 9 } }}>
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <Grid item xs={12} md={4} key={item.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: 3,
                      border: "1px solid rgba(16, 34, 53, 0.1)",
                      bgcolor: "#ffffff",
                      boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "rgba(198, 146, 45, 0.14)",
                        color: "#b07d23",
                        mb: 2,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 900, color: "#102235", mb: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#566474", lineHeight: 1.75 }}>
                      {item.text}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>

        <ServicesShowcase />
        <FeatureTiles />
      </Box>
    </>
  );
}
