import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from "@mui/icons-material/Close";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const MARKET_ITEMS = [
  {
    key: "USD",
    label: "USD/TL",
    icon: AttachMoneyIcon,
    accent: "#1f7a5c",
  },
  {
    key: "EUR",
    label: "EURO/TL",
    icon: EuroIcon,
    accent: "#2458a6",
  },
  {
    key: "GBP",
    label: "GBP/TL",
    icon: CurrencyPoundIcon,
    accent: "#7f3f98",
  },
];

function parseTurkishNumber(value) {
  if (!value) return null;
  const cleaned = String(value)
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function readRate(data, currency) {
  const entry = data?.[currency];
  if (!entry || typeof entry !== "object") return null;

  const directValue =
    entry["Alis"] ||
    entry["Alış"] ||
    entry["AlÄ±ÅŸ"] ||
    entry["alis"] ||
    entry["Satış"] ||
    entry["Satis"];

  if (directValue) return parseTurkishNumber(directValue);

  const firstNumericValue = Object.values(entry).find((value) =>
    Number.isFinite(parseTurkishNumber(value))
  );
  return parseTurkishNumber(firstNumericValue);
}

async function fetchFallbackCurrency(from) {
  const res = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=TRY`);
  if (!res.ok) throw new Error(`Fallback ${from} request failed`);
  const data = await res.json();
  return data?.rates?.TRY || null;
}

export default function CurrencyConverter() {
  const [isVisible, setIsVisible] = useState(true);
  const [market, setMarket] = useState({});
  const [updatedAt, setUpdatedAt] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchMarket() {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch("https://finans.truncgil.com/today.json");
        if (!res.ok) throw new Error("Market feed request failed");

        const data = await res.json();
        if (cancelled) return;

        setMarket({
          USD: readRate(data, "USD"),
          EUR: readRate(data, "EUR"),
          GBP: readRate(data, "GBP"),
        });
        setUpdatedAt(
          new Date().toLocaleTimeString("tr-TR", {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } catch (primaryError) {
        try {
          const [usd, eur, gbp] = await Promise.all([
            fetchFallbackCurrency("USD"),
            fetchFallbackCurrency("EUR"),
            fetchFallbackCurrency("GBP"),
          ]);
          if (cancelled) return;

          setMarket({ USD: usd, EUR: eur, GBP: gbp });
          setUpdatedAt(
            new Date().toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })
          );
          setError(true);
        } catch (fallbackError) {
          if (!cancelled) {
            setMarket({});
            setError(true);
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchMarket();
    const intervalId = window.setInterval(fetchMarket, 60000);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("tr-TR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  if (!isVisible) return null;

  return (
    <Card
      elevation={0}
      sx={{
        position: "fixed",
        top: { xs: 84, md: 96 },
        right: { xs: 12, md: 24 },
        zIndex: (theme) => theme.zIndex.drawer + 2,
        width: { xs: "calc(100vw - 24px)", sm: 360, md: 390 },
        maxWidth: 390,
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.65)",
        bgcolor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 24px 70px rgba(16, 34, 53, 0.2)",
      }}
    >
      <IconButton
        aria-label="Döviz panelini kapat"
        onClick={() => setIsVisible(false)}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
          color: "#5d6b7a",
          bgcolor: "rgba(255,255,255,0.72)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <CardContent sx={{ p: { xs: 2, md: 2.25 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1.5,
            mb: 1.75,
            pr: 4,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "#c6922d", fontWeight: 900, letterSpacing: 1 }}
            >
              Canlı Piyasa
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#102235" }}>
              Döviz bilgileri
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, color: "#5d6b7a" }}>
            {loading ? <CircularProgress size={18} /> : <TrendingUpIcon fontSize="small" />}
            <Typography variant="caption">
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 1,
          }}
        >
          {MARKET_ITEMS.map((item) => {
            const Icon = item.icon;
            const value = market[item.key];

            return (
              <Card
                key={item.key}
                elevation={0}
                sx={{
                  borderRadius: 1.5,
                  border: "1px solid rgba(16, 34, 53, 0.1)",
                  boxShadow: "none",
                  bgcolor: "#f8fafc",
                }}
              >
                <CardContent
                  sx={{
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1.5,
                    "&:last-child": { pb: 1.5 },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 1.5,
                        display: "grid",
                        placeItems: "center",
                        color: item.accent,
                        bgcolor: `${item.accent}18`,
                        flexShrink: 0,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Typography sx={{ fontWeight: 900, color: "#102235" }}>
                      {item.label}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: "#102235",
                      fontSize: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {loading
                      ? "..."
                      : Number.isFinite(value)
                        ? `${formatter.format(value)} TL`
                        : "Veri yok"}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {error && (
          <Alert severity="info" sx={{ mt: 1.5, borderRadius: 1.5 }}>
            Ana piyasa kaynağına ulaşılamazsa kurlar yedek kaynaktan alınır.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
