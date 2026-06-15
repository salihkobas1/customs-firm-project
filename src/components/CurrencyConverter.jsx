import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import DiamondIcon from "@mui/icons-material/Diamond";
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
    label: "EUR/TL",
    icon: EuroIcon,
    accent: "#2458a6",
  },
  {
    key: "GOLD",
    label: "Gram Altın",
    icon: DiamondIcon,
    accent: "#c6922d",
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

async function fetchFallbackCurrency(from) {
  const res = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=TRY`);
  if (!res.ok) throw new Error(`Fallback ${from} request failed`);
  const data = await res.json();
  return data?.rates?.TRY || null;
}

export default function CurrencyConverter() {
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
          USD: parseTurkishNumber(data?.USD?.Alış || data?.USD?.["Alış"]),
          EUR: parseTurkishNumber(data?.EUR?.Alış || data?.EUR?.["Alış"]),
          GOLD: parseTurkishNumber(
            data?.["Gram Altın"]?.Alış ||
              data?.["gram-altin"]?.Alış ||
              data?.["Gram Altın"]?.["Alış"]
          ),
        });
        setUpdatedAt(
          new Date().toLocaleTimeString("tr-TR", {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } catch (primaryError) {
        try {
          const [usd, eur] = await Promise.all([
            fetchFallbackCurrency("USD"),
            fetchFallbackCurrency("EUR"),
          ]);
          if (cancelled) return;

          setMarket({ USD: usd, EUR: eur, GOLD: null });
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

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.65)",
        bgcolor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 24px 70px rgba(16, 34, 53, 0.16)",
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 1.5,
            mb: 2.5,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "#c6922d", fontWeight: 900, letterSpacing: 1 }}
            >
              Canlı Piyasa
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#102235" }}>
              Kur ve altın bilgileri
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#5d6b7a" }}>
            {loading ? <CircularProgress size={18} /> : <TrendingUpIcon fontSize="small" />}
            <Typography variant="body2">
              {updatedAt ? `Son güncelleme ${updatedAt}` : "Veriler yükleniyor"}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
            gap: 1.5,
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
                  borderRadius: 2,
                  border: "1px solid rgba(16, 34, 53, 0.1)",
                  boxShadow: "none",
                  bgcolor: "#f8fafc",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                        color: item.accent,
                        bgcolor: `${item.accent}18`,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography sx={{ fontWeight: 900, color: "#102235" }}>
                      {item.label}
                    </Typography>
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 900, color: "#102235" }}>
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
          <Alert severity="info" sx={{ mt: 2, borderRadius: 2 }}>
            Ana piyasa kaynağına ulaşılamazsa USD ve EUR yedek kaynaktan alınır;
            altın verisi kaynak erişimine bağlıdır.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
