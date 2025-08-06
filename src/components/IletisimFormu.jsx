import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Box, Grid, TextField, Button, Snackbar, Alert, CircularProgress
} from '@mui/material';

const IletisimFormu = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_nqm01dw',
      'template_n1xyufo',
      form.current,
      'QhyOlYTDsT_JfA66D'
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        form.current.reset(); // formu temizle
      },
      () => {
        setError(true);
        setLoading(false);
      }
    );
  };

  return (
    <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="name" label="Ad Soyad" variant="filled" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="email" label="Email" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth name="title" label="Konu" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth name="message" label="Mesaj" multiline rows={4} variant="filled" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ bgcolor: '#d5a559', color: 'black', fontWeight: 'bold', px: 4 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'GÖNDER'}
          </Button>
        </Grid>
      </Grid>

      {/* Başarı ve Hata Mesajları */}
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Mesajınız başarıyla gönderildi.</Alert>
      </Snackbar>

      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert severity="error">Mesaj gönderilirken bir hata oluştu.</Alert>
      </Snackbar>
    </Box>
  );
};

export default IletisimFormu;
