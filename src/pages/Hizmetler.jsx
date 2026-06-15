import React from "react";
import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";

const hizmetler = [
  {
    title: "İhracat Gümrük İşlemleri",
    description:
      "Firmaların ihracat süreçlerinde gerekli olan belgelerin hazırlanması, ilgili kurumlarla koordinasyon sağlanması ve gümrük çıkış işlemlerinin yönetilmesi hizmetlerini kapsamaktadır.",
    image: "/images/hizmet1.jpg",
  },
  {
    title: "İthalat Gümrük İşlemleri",
    description:
      "İthalat beyannamesinin doğru ve eksiksiz şekilde düzenlenmesi, gümrük vergilendirme sürecinde danışmanlık verilmesi ve beyannamenin takibi hizmetleri sunulmaktadır.",
    image: "/images/hizmet2.jpg",
  },
  {
    title: "Danışmanlık Hizmetleri",
    description:
      "Gümrük mevzuatına yönelik tüm konularda uzman danışmanlarımız tarafından sağlanan profesyonel destek ile süreçlerinizin mevzuata uygun yürütülmesi sağlanır.",
    image: "/images/hizmet3.png",
  },
  {
    title: "Transit Gümrük İşlemleri",
    description:
      "Eşyaların bir ülkeye uğramadan diğer bir ülkeye taşınmasını içeren transit işlemlerinin gümrük mevzuatına uygun şekilde yürütülmesini sağlamaktayız.",
    image: "/images/hizmet4.jpg",
  },
  {
    title: "Gümrük Antrepo İşlemleri",
    description:
      "Geçici depolama ve antrepo hizmetlerinde, mallarınızın izlenmesi, stok yönetimi ve beyan işlemleri güvenli ve profesyonelce gerçekleştirilir.",
    image: "/images/hizmet5.jpg",
  },
];

const Hizmetler = () => {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 760, mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: "#c6922d", fontWeight: 900, letterSpacing: 1 }}
          >
            Hizmetlerimiz
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, color: "#102235", mt: 1, lineHeight: 1.12 }}
          >
            Gümrük süreçleriniz için kapsamlı ve güvenilir hizmetler.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 3 }}>
          {hizmetler.map((hizmet, index) => (
            <Card
              key={hizmet.title}
              elevation={0}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: index % 2 === 0 ? "0.95fr 1.05fr" : "1.05fr 0.95fr",
                },
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(16, 34, 53, 0.1)",
                boxShadow: "0 18px 45px rgba(16, 34, 53, 0.08)",
              }}
            >
              <CardMedia
                component="img"
                image={hizmet.image}
                alt={hizmet.title}
                sx={{
                  height: { xs: 240, md: 360 },
                  width: "100%",
                  objectFit: "cover",
                  order: { xs: 0, md: index % 2 === 0 ? 0 : 1 },
                }}
              />
              <CardContent
                sx={{
                  p: { xs: 3, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "#ffffff",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "#102235", mb: 2 }}
                >
                  {hizmet.title}
                </Typography>
                <Typography sx={{ fontSize: "1.08rem", lineHeight: 1.85, color: "#566474" }}>
                  {hizmet.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hizmetler;
