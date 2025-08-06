import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Iletisim = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nqm01dw",      // Service ID
        "template_n1xyufo",     // Template ID
        form.current,
        "QhyOlYTDsT_JfA66D"     // Public key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <Box sx={{ bgcolor: '#0e0e0e', color: 'white', py: 8 }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={10}>
          <Grid container justifyContent="center" spacing={4}>
            {/* İletişim Bilgileri */}
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <LocationOnIcon sx={{ fontSize: 50, color: '#d5a559' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>Adres:</Typography>
                <Typography variant="body1">
                  1472. Sk. No:34 K.3, Alsancak<br />35220 Konak/İzmir
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <PhoneIcon sx={{ fontSize: 50, color: '#d5a559' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>Telefon:</Typography>
                <Typography variant="body1">+90 532 566 02 82</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: 50, color: '#d5a559' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>Email:</Typography>
                <Typography variant="body1">info@barisgumruk.com</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* İletişim Formu */}
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{ mt: 6, textAlign: 'center' }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>Bize Ulaşın</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  fullWidth
                  variant="filled"
                  label="Ad Soyad"
                  required
                  sx={{ input: { color: 'white' }, bgcolor: '#1e1e1e', borderRadius: 1 }}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  fullWidth
                  variant="filled"
                  label="Email"
                  required
                  type="email"
                  sx={{ input: { color: 'white' }, bgcolor: '#1e1e1e', borderRadius: 1 }}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  fullWidth
                  variant="filled"
                  label="Konu"
                  required
                  sx={{ input: { color: 'white' }, bgcolor: '#1e1e1e', borderRadius: 1 }}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  fullWidth
                  variant="filled"
                  label="Mesaj"
                  multiline
                  required
                  rows={4}
                  sx={{ textarea: { color: 'white' }, bgcolor: '#1e1e1e', borderRadius: 1 }}
                  InputLabelProps={{ style: { color: '#aaa' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  disabled={loading}
                  sx={{ bgcolor: '#d5a559', color: 'black', fontWeight: 'bold', px: 4 }}
                >
                  {loading ? "Gönderiliyor..." : "GÖNDER"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Harita */}
        <Grid item xs={12} sx={{ mt: 6 }}>
          <iframe
            title="Barış Gümrükleme Harita"
            src="https://www.google.com/maps?q=Barış+Gümrükleme,+Alsancak,+1472.+Sk.+No:34+K.3,+35220+Konak/İzmir&output=embed"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </Grid>
      </Grid>

      {/* Snackbar Bildirimleri */}
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>Mesajınız başarıyla gönderildi.</Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert severity="error" sx={{ width: '100%' }}>Mesaj gönderilirken bir hata oluştu.</Alert>
      </Snackbar>
    </Box>
  );
};

export default Iletisim;
