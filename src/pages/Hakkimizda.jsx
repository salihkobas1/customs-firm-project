import React from 'react';
import CustomSlider from '../components/Slider';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyConverter from "../components/CurrencyConverter";

export default function Hakkimizda() {
  return (
    <>
      <CustomSlider />

<Box sx={{ bgcolor: '#f5f5f5', py: 8,pt: '80px' }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Hakkımızda
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem' }}>
          Gümrük müşavirliği alanında uzman kadromuzla, müşterilerimize ithalat ve ihracat işlemlerinde hızlı, güvenilir ve etkin çözümler sunmaktayız. Yılların verdiği tecrübe ile sektörde öncü konumda bulunmaktan gurur duyuyoruz.
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem' }}>
          Firmamız, Türkiye'nin dört bir yanındaki müşterilerine kişiye özel danışmanlık hizmeti verirken aynı zamanda uluslararası mevzuatlara da tam uyum sağlar. Müşteri memnuniyetini temel ilke edinen anlayışımızla, işlemlerinizin her aşamasında yanınızdayız.
        </Typography>

        <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', fontWeight: 'bold', mt: 2 }}>
          32 yıllık tecrübemizle sizlere en kaliteli hizmeti sunmak için çalışıyoruz.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={4} sx={{ p: 4, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <VisibilityIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Vizyonumuz
                </Typography>
                <Typography variant="body1">
                  Gümrük süreçlerinde teknolojik gelişmeleri yakından takip ederek dijitalleşmeyi tüm hizmet süreçlerine entegre eden, müşterilerine hızlı, güvenilir ve sürdürülebilir çözümler sunan lider bir firma olmaktır. Sektörde yeniliklerin öncüsü olmayı hedefliyoruz.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={4} sx={{ p: 4, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <FlagIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Misyonumuz
                </Typography>
                <Typography variant="body1">
                  Müşterilerimizin dış ticaret süreçlerini hızlandırmak, yasal mevzuatlara tam uyum sağlayarak hata payını en aza indirmek, operasyonel verimliliği artırmak ve güvene dayalı uzun vadeli iş birlikleri kurmak. Gümrük müşavirliği alanında kalite standartlarını yükseltmek için çalışıyoruz.
                </Typography>
              </Box>
            </Paper>
          </Grid>

            <Grid item xs={12}>
            <Paper elevation={4} sx={{ p: 4, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <GroupsIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Uzman Ekibimiz
                </Typography>
                <Typography variant="body1">
                  Alanında deneyimli, mevzuata hakim ve sürekli eğitimlerle güncel bilgileri takip eden uzman kadromuzla her zaman yanınızdayız. Ekibimiz, her müşterimize özel çözümler üretmek ve işlemleri hızlı bir şekilde sonuçlandırmak için koordineli ve disiplinli bir şekilde çalışır.
                </Typography>
              </Box>
            </Paper>
          </Grid>



        </Grid>
      </Container>
    </Box>
    </>
  );
}
