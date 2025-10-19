import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Settings } from 'lucide-react';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const { user, userRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
    setIsInvolvedOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
            <div className="flex items-center space-x-3">
              <img
                src="/RHLOGO.png"
                alt="Returnees Hotline Logo"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-800">Returnees Hotline</div>
                <div className="text-xs text-gray-600">Japan</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                currentPage === 'home' ? 'text-sky-500' : 'text-gray-700'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                currentPage === 'about' ? 'text-sky-500' : 'text-gray-700'
              }`}
            >
              {t('nav.about')}
            </button>

            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-sky-500 transition-colors"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                {t('nav.programs')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isProgramsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <button
                    onClick={() => handleNavigate('programs')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    NeoGlobal Exchange
                  </button>
                  <button
                    onClick={() => handleNavigate('programs')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Study Session Program
                  </button>
                  <button
                    onClick={() => handleNavigate('programs')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Consultation Center
                  </button>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-sky-500 transition-colors"
                onMouseEnter={() => setIsInvolvedOpen(true)}
                onMouseLeave={() => setIsInvolvedOpen(false)}
              >
                {t('nav.getInvolved')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isInvolvedOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setIsInvolvedOpen(true)}
                  onMouseLeave={() => setIsInvolvedOpen(false)}
                >
                  <button
                    onClick={() => handleNavigate('get-involved')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Volunteer Opportunities
                  </button>
                  <button
                    onClick={() => handleNavigate('get-involved')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Book Buddies
                  </button>
                  <button
                    onClick={() => handleNavigate('get-involved')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    RH International Day
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('events')}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                currentPage === 'events' ? 'text-sky-500' : 'text-gray-700'
              }`}
            >
              {t('nav.events')}
            </button>
            <button
              onClick={() => handleNavigate('research')}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                currentPage === 'research' ? 'text-sky-500' : 'text-gray-700'
              }`}
            >
              {t('nav.research')}
            </button>
            <button
              onClick={() => handleNavigate('team')}
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                currentPage === 'team' ? 'text-sky-500' : 'text-gray-700'
              }`}
            >
              {t('nav.team')}
            </button>

            <button
              onClick={toggleLanguage}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-1 text-sm font-medium text-gray-700"
              title={language === 'en' ? 'Switch to Japanese' : '英語に切り替え'}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'JP' : 'EN'}</span>
            </button>

            {user && userRole && (
              <button
                onClick={() => handleNavigate('admin')}
                className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                title="Admin Dashboard"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={() => handleNavigate('donate')}
              className="ml-2 px-6 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white font-semibold rounded-full hover:from-orange-500 hover:to-amber-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t('nav.donate')}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => handleNavigate('home')}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {t('nav.about')}
            </button>

            <div className="py-2">
              <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t('nav.programs')}
              </div>
              <button
                onClick={() => handleNavigate('programs')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                NeoGlobal Exchange
              </button>
              <button
                onClick={() => handleNavigate('programs')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Study Session Program
              </button>
              <button
                onClick={() => handleNavigate('programs')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Consultation Center
              </button>
            </div>

            <div className="py-2">
              <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t('nav.getInvolved')}
              </div>
              <button
                onClick={() => handleNavigate('get-involved')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Volunteer Opportunities
              </button>
              <button
                onClick={() => handleNavigate('get-involved')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                Book Buddies
              </button>
              <button
                onClick={() => handleNavigate('get-involved')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                RH International Day
              </button>
            </div>

            <button
              onClick={() => handleNavigate('events')}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {t('nav.events')}
            </button>
            <button
              onClick={() => handleNavigate('research')}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {t('nav.research')}
            </button>
            <button
              onClick={() => handleNavigate('team')}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            >
              {t('nav.team')}
            </button>

            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors flex items-center"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? '日本語 (Japanese)' : 'English'}
            </button>

            {user && userRole && (
              <button
                onClick={() => handleNavigate('admin')}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin Dashboard
              </button>
            )}

            <button
              onClick={() => handleNavigate('donate')}
              className="block w-full text-left px-3 py-2 mt-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-amber-500 transition-all"
            >
              {t('nav.donate')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
