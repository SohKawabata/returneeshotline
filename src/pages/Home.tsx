import { ArrowRight, BookOpen, Heart, Users, GraduationCap, MessageCircle, Sparkles } from 'lucide-react';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-sky-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {t('home.badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              {t('home.title')}
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t('home.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
              {t('home.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <button
                onClick={() => onNavigate('programs')}
                className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center"
              >
                {t('home.explorePrograms')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-gray-200"
              >
                {t('home.learnAbout')}
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.programs.title')}</h3>
              <p className="text-gray-600">
                {t('home.programs.desc')}
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-800">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.support.title')}</h3>
              <p className="text-gray-600">
                {t('home.support.desc')}
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-1000">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.community.title')}</h3>
              <p className="text-gray-600">
                {t('home.community.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('home.makeDifference')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.makeDifferenceDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{t('home.volunteer.title')}</h3>
                <p className="text-sky-50 mb-6 text-lg">
                  {t('home.volunteer.desc')}
                </p>
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="group/btn px-6 py-3 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                >
                  {t('home.volunteer.btn')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{t('home.donate.title')}</h3>
                <p className="text-amber-50 mb-6 text-lg">
                  {t('home.donate.desc')}
                </p>
                <button
                  onClick={() => onNavigate('donate')}
                  className="group/btn px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                >
                  {t('home.donate.btn')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
            <div className="relative">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('home.help.title')}
              </h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                {t('home.help.desc')}
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                <GraduationCap className="w-5 h-5 mr-2" />
                {t('home.help.chatHint')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
