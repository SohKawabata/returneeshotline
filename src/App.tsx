import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HapticHug from './components/HapticHug';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Events from './pages/Events';
import Research from './pages/Research';
import Team from './pages/Team';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { useAuth } from './contexts/AuthContext';
import type { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { user, userRole } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    if (page === 'admin' && !user) {
      setCurrentPage('login');
      return;
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'programs':
        return <Programs />;
      case 'get-involved':
        return <GetInvolved />;
      case 'events':
        return <Events />;
      case 'research':
        return <Research />;
      case 'team':
        return <Team />;
      case 'donate':
        return <Donate />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'admin':
        if (!user || !userRole) {
          setCurrentPage('login');
          return <Login onNavigate={handleNavigate} />;
        }
        return <Admin onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  if (currentPage === 'admin') {
    return renderPage();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Chatbot onNavigate={handleNavigate} />
      <HapticHug />
    </div>
  );
}

export default App;
