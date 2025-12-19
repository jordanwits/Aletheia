import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import GetInvolved from './pages/GetInvolved';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import './App.css';

function ContactRedirect() {
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const hash = subject ? `#contact?subject=${encodeURIComponent(subject)}` : '#contact';
    window.location.href = `/${hash}`;
  }, [location.search]);
  
  return <Navigate to="/" replace />;
}

function AppLayout() {
  const location = useLocation();
  const flushTopRoutes = ['/'];
  const isFlushTop = flushTopRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Header />
      <main className={isFlushTop ? 'main main--flush-top' : 'main'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactRedirect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;

