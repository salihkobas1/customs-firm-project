import React, { useEffect, useMemo, useState } from "react";
import {
  Card, CardContent, Typography, Box,
  TextField, FormControl, InputLabel, Select, MenuItem,
  IconButton, Divider, CircularProgress
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const CURRENCIES = ["TRY", "USD", "EUR", "GBP", "CHF", "JPY", "AUD", "CAD"];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedAt, setUpdatedAt] = useState("");

  const result = useMemo(() => {
    if (!rates || !rates[to]) return "";
    const val = Number(amount || 0) * rates[to];
    return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(val);
  }, [amount, rates, to]);

  useEffect(() => {
    let cancelled = false;
    async function fetchRates() {
      setLoading(true);
      try {
        // Ücretsiz & anahtarsız: exchangerate.host
        const res = await fetch(`https://api.exchangerate.host/latest?base=${from}`);
        const data = await res.json();
        if (!cancelled) {
          setRates(data.rates || {});
          setUpdatedAt(data.date || "");
        }
      } catch (e) {
        if (!cancelled) setRates(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchRates();
    return () => { cancelled = true; };
  }, [from]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 2,
        position: "sticky",
        top: 96, // navbar + nefes payı
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Döviz Çevirici
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 2 }}>
          <TextField
            label="Tutar"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            size="small"
          />

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <FormControl fullWidth size="small">
              <InputLabel>Kaynak</InputLabel>
              <Select label="Kaynak" value={from} onChange={(e) => setFrom(e.target.value)}>
                {CURRENCIES.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
              </Select>
            </FormControl>

            <IconButton onClick={swap} aria-label="swap" sx={{ mx: 0.5 }}>
              <SwapHorizIcon />
            </IconButton>

            <FormControl fullWidth size="small">
              <InputLabel>Hedef</InputLabel>
              <Select label="Hedef" value={to} onChange={(e) => setTo(e.target.value)}>
                {CURRENCIES.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>

          <Divider />

          <Box sx={{ minHeight: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography color="text.secondary">Sonuç</Typography>
            {loading ? (
              <CircularProgress size={22} />
            ) : (
              <Typography variant="h6" fontWeight={700}>
                {result ? `${result} ${to}` : "-"}
              </Typography>
            )}
          </Box>

          {updatedAt && (
            <Typography variant="caption" color="text.secondary">
              Güncellenme: {updatedAt}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
