import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const slides = [
  {
    titleLines: [
      "Gümrük Hizmetlerinde",
      "Fark Yaratan, Fayda",
      "Sağlayan Yaklaşım",
    ],
    image: "/Slider1.jpg",
  },
  {
    titleLines: ["İthalat ve İhracat", "Süreçlerinde", "Güvenli Danışmanlık"],
    image: "/Slider2.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
};

export default function CustomSlider() {
  return (
    <Box
      sx={{
        ".slick-dots": { bottom: 24 },
        ".slick-dots li button:before": { color: "#fff", fontSize: 10 },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.image}>
            <Box
              sx={{
                minHeight: { xs: 560, md: 620 },
                backgroundImage: `linear-gradient(90deg, rgba(8,31,56,0.84) 0%, rgba(8,31,56,0.58) 42%, rgba(8,31,56,0.12) 100%), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
                px: { xs: 3, md: 10 },
              }}
            >
              <Box sx={{ maxWidth: 760, color: "#fff", pt: { xs: 4, md: 6 } }}>
                <Typography
                  variant="overline"
                  sx={{ color: "#d9ae60", fontWeight: 900, letterSpacing: 1.4 }}
                >
                  Barış Gümrükleme
                </Typography>

                <Box sx={{ mt: 1.5, mb: 3 }}>
                  {slide.titleLines.map((line) => (
                    <Typography
                      key={line}
                      component="h1"
                      sx={{
                        fontSize: { xs: "2.4rem", md: "4.5rem" },
                        lineHeight: 1.04,
                        fontWeight: 900,
                        textShadow: "0 12px 32px rgba(0,0,0,0.42)",
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>

                <Button
                  component={Link}
                  to="/hizmetler"
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
                    "&:hover": { bgcolor: "#c6922d" },
                  }}
                >
                  Hizmetlerimizi Görüntüle
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
