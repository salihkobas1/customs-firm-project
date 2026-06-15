import React, { useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";

const contactItems = [
  {
    icon: LocationOnIcon,
    label: "Adres:",
    value: (
      <>
        1472. Sk. No:34 K.3, Alsancak
        <br />
        35220 Konak/İzmir
      </>
    ),
  },
  {
    icon: PhoneIcon,
    label: "Telefon:",
    value: "+90 532 566 02 82",
  },
  {
    icon: EmailIcon,
    label: "Email:",
    value: "info@barisgumruk.com",
  },
];

const fieldStyle = {
  "& .MuiFilledInput-root": {
    bgcolor: "#f4f6f8",
    borderRadius: 2,
    overflow: "hidden",
    "&:before, &:after": { display: "none" },
  },
};

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
        "service_nqm01dw",
        "template_n1xyufo",
        form.current,
        "QhyOlYTDsT_JfA66D"
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
    <Box sx={{ bgcolor: "#f5f7fa", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760, mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: "#c6922d", fontWeight: 900, letterSpacing: 1 }}
          >
            İletişim
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, color: "#102235", mt: 1, lineHeight: 1.12 }}
          >
            Size yardımcı olmak için buradayız.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <Grid item xs={12} md={4} key={item.label}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid rgba(16, 34, 53, 0.1)",
                    boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 2,
                      mx: "auto",
                      mb: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(198, 146, 45, 0.14)",
                      color: "#b07d23",
                    }}
                  >
                    <Icon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 900, color: "#102235", mb: 1 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "#566474", lineHeight: 1.7 }}>
                    {item.value}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper
              component="form"
              ref={form}
              onSubmit={sendEmail}
              elevation={0}
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: "1px solid rgba(16, 34, 53, 0.1)",
                boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
                bgcolor: "#fff",
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 900, color: "#102235" }}>
                Bize Ulaşın
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="name"
                    fullWidth
                    variant="filled"
                    label="Ad Soyad"
                    required
                    sx={fieldStyle}
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
                    sx={fieldStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="title"
                    fullWidth
                    variant="filled"
                    label="Konu"
                    required
                    sx={fieldStyle}
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
                    rows={5}
                    sx={fieldStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    disabled={loading}
                    sx={{
                      bgcolor: "#d9ae60",
                      color: "#101820",
                      fontWeight: 900,
                      textTransform: "none",
                      borderRadius: 2,
                      px: 4,
                      py: 1.2,
                      "&:hover": { bgcolor: "#c6922d" },
                    }}
                  >
                    {loading ? "Gönderiliyor..." : "Gönder"}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                minHeight: 460,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(16, 34, 53, 0.1)",
                boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
              }}
            >
              <iframe
                title="Barış Gümrükleme Harita"
                src="https://www.google.com/maps?q=Barış+Gümrükleme,+Alsancak,+1472.+Sk.+No:34+K.3,+35220+Konak/İzmir&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, minHeight: 460, display: "block" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Mesajınız başarıyla gönderildi.
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Mesaj gönderilirken bir hata oluştu.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Iletisim;
