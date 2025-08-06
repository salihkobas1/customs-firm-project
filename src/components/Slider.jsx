import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const slides = [
  {
    titleLines: [
      'Gümrük Hizmetlerinde',
      'Fark Yaratan, Fayda',
      'Sağlayan Yaklaşım'
    ],
    image: '/Slider1.jpg'
  },
  {
    titleLines: [
      'İthalat ve İhracat',
      'Süreçlerinde',
      'Güvenli Danışmanlık'
    ],
    image: '/Slider2.jpg'
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

export default function CustomSlider() {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: '500px',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '40px',
              right: '30px',
              textAlign: 'right',
              color: 'white',
              zIndex: 2
            }}
          >
            {slide.titleLines.map((line, idx) => (
              <Typography
                key={idx}
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '1px 1px 5px #000',
                  mb: 1
                }}
              >
                {line}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Slider>
  );
}
