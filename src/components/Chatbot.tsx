import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import type { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ChatbotProps {
  onNavigate: (page: Page) => void;
}

export default function Chatbot({ onNavigate }: ChatbotProps) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);

  const getOptionText = (key: string) => {
    const options: Record<string, Record<string, string>> = {
      en: {
        'Find a Program': 'Find a Program',
        'Get Support': 'Get Support',
        'Volunteer': 'Volunteer',
        'Upcoming Events': 'Upcoming Events',
      },
      ja: {
        'Find a Program': 'プログラムを探す',
        'Get Support': 'サポートを受ける',
        'Volunteer': 'ボランティア',
        'Upcoming Events': 'イベント情報',
      },
    };
    return options[language][key] || key;
  };

  const getResponseText = (option: string): string => {
    const responses: Record<string, Record<string, string>> = {
      en: {
        'Find a Program': "Great! We offer three main programs:\n\n• NeoGlobal Exchange - Cultural exchange and discussion groups\n• Study Session Program - Academic support and tutoring\n• Consultation Center - Mental health and counseling services\n\nWould you like me to take you to our Programs page to learn more?",
        'Get Support': "I'm here to help! Our Consultation Center provides:\n\n• Individual counseling sessions\n• Family support\n• Crisis intervention\n• Bilingual services (Japanese/English)\n\nOur services are confidential and available 24/7. Let me take you to our Programs page where you can learn more about our mental health support.",
        'Volunteer': "Thank you for your interest in volunteering! We have several opportunities:\n\n• Tutoring & mentoring\n• Event support\n• Translation services\n• Administrative help\n• Book Buddies program\n\nYou can commit as little as 2 hours per week. Let me take you to our Get Involved page to learn more!",
        'Upcoming Events': "We have some exciting events coming up!\n\n• RH International Day - August 15, 2025\n• Summer Study Marathon - July 20, 2025\n• Mental Health Workshop - June 28, 2025\n• Career Path Panel - June 15, 2025\n\nLet me take you to our Events page to see all the details!",
      },
      ja: {
        'Find a Program': "素晴らしい！私たちは3つの主なプログラムを提供しています：\n\n• NeoGlobal Exchange - 文化交流とディスカッショングループ\n• Study Session Program - 学習サポートと個別指導\n• Consultation Center - メンタルヘルスとカウンセリングサービス\n\nプログラムページで詳細をご覧になりますか？",
        'Get Support': "お手伝いします！私たちのConsultation Centerでは以下を提供しています：\n\n• 個別カウンセリング\n• 家族サポート\n• 危機介入\n• バイリンガルサービス（日本語・英語）\n\nサービスは機密扱いで、24時間365日利用可能です。プログラムページでメンタルヘルスサポートについて詳しくご案内します。",
        'Volunteer': "ボランティアに興味を持っていただきありがとうございます！いくつかの機会があります：\n\n• 個別指導とメンタリング\n• イベントサポート\n• 翻訳サービス\n• 事務サポート\n• Book Buddiesプログラム\n\n週2時間から参加できます。参加ページで詳細をご覧ください！",
        'Upcoming Events': "素敵なイベントが予定されています！\n\n• RH International Day - 2025年8月15日\n• Summer Study Marathon - 2025年7月20日\n• Mental Health Workshop - 2025年6月28日\n• Career Path Panel - 2025年6月15日\n\nイベントページですべての詳細をご覧ください！",
      },
    };
    return responses[language][option] || '';
  };

  const handleOptionClick = (option: string, page?: Page) => {
    setMessages((prev) => [...prev, { text: getOptionText(option), isBot: false }]);
    setShowOptions(false);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: getResponseText(option),
          isBot: true,
        },
      ]);
      setTimeout(() => {
        if (page) onNavigate(page);
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setShowOptions(true);
        }, 300);
      }, 2000);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-50 group"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></span>
          <div className="absolute bottom-full mb-2 right-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('chat.title')}
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">{t('chat.title')}</div>
                <div className="text-xs text-sky-100">{t('chat.subtitle')}</div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  setMessages([]);
                  setShowOptions(true);
                }, 300);
              }}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 max-h-96 bg-gray-50">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm font-bold">RH</span>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 mb-3">
                    {language === 'en' ? "Hi there! I'm RH Assistant." : 'こんにちは！RHアシスタントです。'}
                    <br />
                    {language === 'en' ? 'I can help you:' : 'お手伝いできること：'}
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm ml-4">
                    <li>• {getOptionText('Find a Program')}</li>
                    <li>• {getOptionText('Get Support')}</li>
                    <li>• {getOptionText('Volunteer')}</li>
                    <li>• {getOptionText('Upcoming Events')}</li>
                  </ul>
                  <p className="text-gray-800 mt-3 font-medium">
                    {language === 'en' ? 'What would you like to do today?' : '今日は何をお手伝いしましょうか？'}
                  </p>
                </div>
              </div>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-white shadow-sm text-gray-800'
                      : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">RH</span>
                      </div>
                      <span className="text-xs text-gray-500">{t('chat.title')}</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {showOptions && messages.length === 0 && (
            <div className="p-4 bg-white border-t border-gray-200 space-y-2">
              <button
                onClick={() => handleOptionClick('Find a Program', 'programs')}
                className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md text-left"
              >
                {getOptionText('Find a Program')}
              </button>
              <button
                onClick={() => handleOptionClick('Get Support', 'programs')}
                className="w-full px-4 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-medium rounded-xl hover:from-orange-500 hover:to-amber-600 transition-all duration-200 shadow-sm hover:shadow-md text-left"
              >
                {getOptionText('Get Support')}
              </button>
              <button
                onClick={() => handleOptionClick('Volunteer', 'get-involved')}
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-200 shadow-sm hover:shadow-md text-left"
              >
                {getOptionText('Volunteer')}
              </button>
              <button
                onClick={() => handleOptionClick('Upcoming Events', 'events')}
                className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-medium rounded-xl hover:from-pink-500 hover:to-rose-600 transition-all duration-200 shadow-sm hover:shadow-md text-left"
              >
                {getOptionText('Upcoming Events')}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
