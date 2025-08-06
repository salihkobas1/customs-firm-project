import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#0a2c51',
        boxShadow: 1,
        color: '#ffffff',
        zIndex: 1300
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 6 } }}>
        {/* Sol Logo */}
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="Firma Logosu"
            style={{
              height: 62, // %25 artış → önceki 50px idi
              marginRight: 10
            }}
          />
        </Box>

        {/* Orta Menü */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button component={Link} to="/" sx={linkStyle}>Ana Sayfa</Button>
          <Button component={Link} to="/hakkimizda" sx={linkStyle}>Hakkımızda</Button>
          <Button component={Link} to="/hizmetler" sx={linkStyle}>Hizmetlerimiz</Button>
          <Button component={Link} to="/iletisim" sx={linkStyle}>İletişim</Button>
        </Box>

        {/* Sağ Buton */}
        <Button
        component={Link} to="/iletisim"
          variant="outlined"
          startIcon={<LanguageIcon />}
          sx={{
            color: '#ffffff',
            borderColor: '#ffffff',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f0f0f0'
            }
          }}
        >
          Hizmet Online
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const linkStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1rem'
};
