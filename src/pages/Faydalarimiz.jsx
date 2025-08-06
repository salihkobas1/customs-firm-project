import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';

export default function Faydalarimiz() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url("/images/foto8.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          Hakkımızda
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          Barış Gümrük Müşavirliği
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mb: 4, fontSize: '1.1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          Gümrük müşavirliği alanında 32 yıllık tecrübemizle, müşterilerimize ithalat ve ihracat işlemlerinde hızlı, güvenilir ve etkin çözümler sunuyoruz. Alanında uzman kadromuzla her zaman yanınızdayız.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ width: 250, fontWeight: 'bold', mb: 5 }}
          onClick={() => navigate('/hizmetler')}
        >
          HİZMETLERİMİZİ GÖRÜNTÜLE
        </Button>

        <Typography variant="h6" color="warning.main" fontWeight="bold" sx={{ mb: 2 }}>
          Neler Yapıyoruz
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', p: 2, borderRadius: 2 }}>
              <FlightTakeoffIcon sx={{ mr: 1, color: 'orange' }} />
              <Typography variant="subtitle1" fontWeight="bold">İhracat Gümrük İşlemleri</Typography>
              <Typography variant="body2">Gümrük çıkış beyannamesi, evrak takibi, lojistik koordinasyonu.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', p: 2, borderRadius: 2 }}>
              <FlightLandIcon sx={{ mr: 1, color: 'orange' }} />
              <Typography variant="subtitle1" fontWeight="bold">İthalat Gümrük İşlemleri</Typography>
              <Typography variant="body2">Gümrük vergilendirme ve mevzuat danışmanlığı, beyanname işlemleri.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', p: 2, borderRadius: 2 }}>
              <GavelIcon sx={{ mr: 1, color: 'orange' }} />
              <Typography variant="subtitle1" fontWeight="bold">Danışmanlık ve Proje Hizmetleri</Typography>
              <Typography variant="body2">Ürün tarife belirleme, transit işlemler ve denetim desteği.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
