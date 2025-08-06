import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hakkimizda from './pages/Hakkimizda';
import Hizmetler from './pages/Hizmetler';
import Faydalarimiz from './pages/Faydalarimiz';
import Iletisim from './pages/Iletisim';

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Bu Toolbar, AppBar'ın yüksekliği kadar yer açar */}
      <Toolbar />

      <Box>
        <Routes>
          <Route path="/" element={<Hakkimizda />} />
          <Route path="/hizmetler" element={<Hizmetler />} />
          <Route path="/hakkimizda" element={<Faydalarimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Box>

      <Footer />
    </Router>
  );
}

export default App;
