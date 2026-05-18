import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookCallModal from './components/BookCallModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children, onBookCall }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onBookCall={onBookCall} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <Layout onBookCall={openModal}>
        <Routes>
          <Route path="/" element={<Home onBookCall={openModal} />} />
          <Route path="/about" element={<About onBookCall={openModal} />} />
          <Route path="/services" element={<Services onBookCall={openModal} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <BookCallModal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
}

export default App;
