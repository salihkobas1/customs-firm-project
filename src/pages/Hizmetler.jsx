import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const hizmetler = [
  {
    title: 'İhracat Gümrük İşlemleri',
    description:
      'Firmaların ihracat süreçlerinde gerekli olan belgelerin hazırlanması, ilgili kurumlarla koordinasyon sağlanması ve gümrük çıkış işlemlerinin yönetilmesi hizmetlerini kapsamaktadır.',
    image: '/images/hizmet1.jpg'
  },
  {
    title: 'İthalat Gümrük İşlemleri',
    description:
      'İthalat beyannamesinin doğru ve eksiksiz şekilde düzenlenmesi, gümrük vergilendirme sürecinde danışmanlık verilmesi ve beyannamenin takibi hizmetleri sunulmaktadır.',
    image: '/images/hizmet2.jpg'
  },
  {
    title: 'Danışmanlık Hizmetleri',
    description:
      'Gümrük mevzuatına yönelik tüm konularda uzman danışmanlarımız tarafından sağlanan profesyonel destek ile süreçlerinizin mevzuata uygun yürütülmesi sağlanır.',
    image: '/images/hizmet3.png'
  },
  {
    title: 'Transit Gümrük İşlemleri',
    description:
      'Eşyaların bir ülkeye uğramadan diğer bir ülkeye taşınmasını içeren transit işlemlerinin gümrük mevzuatına uygun şekilde yürütülmesini sağlamaktayız.',
    image: '/images/hizmet4.jpg'
  },
  {
    title: 'Gümrük Antrepo İşlemleri',
    description:
      'Geçici depolama ve antrepo hizmetlerinde, mallarınızın izlenmesi, stok yönetimi ve beyan işlemleri güvenli ve profesyonelce gerçekleştirilir.',
    image: '/images/hizmet5.jpg'
  }
];

const Hizmetler = () => {
  return (
    <Box>
      {/* Üstteki açılış kartı */}


      {/* Alt hizmetler */}
      {hizmetler.map((hizmet, index) => (
        <Card
          key={hizmet.title}
          sx={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            margin: 4,
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: '50%', objectFit: 'cover' }}
            image={hizmet.image}
            alt={hizmet.title}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 5,
              width: '50%'
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold">
              {hizmet.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {hizmet.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Hizmetler;
