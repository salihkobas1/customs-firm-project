import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import Hakkimizda from "./pages/Hakkimizda";
import Hizmetler from "./pages/Hizmetler";
import Faydalarimiz from "./pages/Faydalarimiz";
import Iletisim from "./pages/Iletisim";

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <ScrollIndicator />
        <Box sx={{ height: { xs: 72, md: 82 }, flexShrink: 0 }} />

        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hakkimizda />} />
            <Route path="/hizmetler" element={<Hizmetler />} />
            <Route path="/hakkimizda" element={<Faydalarimiz />} />
            <Route path="/iletisim" element={<Iletisim />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
