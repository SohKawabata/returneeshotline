import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/RHLOGO.png"
                alt="Returnees Hotline Logo"
                className="h-10 w-auto"
              />
              <div>
                <div className="text-lg font-bold text-gray-800">Returnees Hotline</div>
                <div className="text-xs text-gray-600">Japan</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.programs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.events')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.team')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('footer.volunteer')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.donate')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  {t('nav.research')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sky-500 transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm flex items-center">
            <Heart className="w-4 h-4 text-red-400 mr-1" />
            {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-sky-500 transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-sky-500 transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
