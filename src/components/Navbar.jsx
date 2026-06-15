import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Hizmetlerimiz", path: "/hizmetler" },
  { label: "İletişim", path: "/iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = navItems.map((item) => {
    const active = location.pathname === item.path;

    return (
      <Button
        key={item.path}
        component={Link}
        to={item.path}
        sx={{
          color: "#ffffff",
          fontWeight: 800,
          textTransform: "none",
          borderRadius: 2,
          px: 1.5,
          bgcolor: active ? "rgba(255,255,255,0.12)" : "transparent",
          "&:hover": { bgcolor: "rgba(255,255,255,0.16)" },
        }}
      >
        {item.label}
      </Button>
    );
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(10, 44, 81, 0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        color: "#ffffff",
        zIndex: 1300,
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 72, md: 82 },
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 8 },
          gap: 2,
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="/logo.png"
            alt="Barış Gümrükleme Logosu"
            style={{ height: 58, width: "auto", display: "block" }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navLinks}
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            component={Link}
            to="/iletisim"
            variant="outlined"
            startIcon={<LanguageIcon />}
            sx={{
              color: "#ffffff",
              borderColor: "rgba(255,255,255,0.72)",
              fontWeight: 800,
              textTransform: "none",
              borderRadius: 2,
              px: 2,
              "&:hover": {
                borderColor: "#ffffff",
                bgcolor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            Hizmet Online
          </Button>
        </Box>

        <IconButton
          aria-label="Menüyü aç"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" }, color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton aria-label="Menüyü kapat" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={() => setOpen(false)}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 800 }}
                />
              </ListItemButton>
            ))}
          </List>

          <Button
            fullWidth
            component={Link}
            to="/iletisim"
            variant="contained"
            startIcon={<LanguageIcon />}
            onClick={() => setOpen(false)}
            sx={{
              mt: 2,
              bgcolor: "#c6922d",
              color: "#101820",
              fontWeight: 900,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Hizmet Online
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
