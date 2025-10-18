import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ja' ? 'ja' : 'en') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language]?.[key];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.programs': 'Programs',
    'nav.getInvolved': 'Get Involved',
    'nav.events': 'Events',
    'nav.research': 'Research',
    'nav.team': 'Our Team',
    'nav.donate': 'Donate',

    'home.badge': 'By Returnee Students, For Returnee Students',
    'home.title': 'Helping Returnees',
    'home.titleHighlight': 'Thrive in Japan',
    'home.subtitle': 'Run by returnee high school students, for returnee high school students. We understand your journey because we\'ve lived it too.',
    'home.explorePrograms': 'Explore Our Programs',
    'home.learnAbout': 'Learn About Us',

    'home.programs.title': 'Programs',
    'home.programs.desc': 'Student-led educational support, peer exchange programs, and study sessions designed by returnees who understand your challenges.',
    'home.support.title': 'Support',
    'home.support.desc': 'Peer support, mental health resources, and a caring community of students who truly get what you\'re going through.',
    'home.community.title': 'Community',
    'home.community.desc': 'Connect with fellow returnee students who understand your journey firsthand and are here to support each other.',

    'home.makeDifference': 'Make a Difference Today',
    'home.makeDifferenceDesc': 'Join our student-led community and help fellow returnees across Japan.',
    'home.volunteer.title': 'Join as a Volunteer',
    'home.volunteer.desc': 'Share your experience as a returnee to mentor and support fellow students through their transition journey.',
    'home.volunteer.btn': 'Get Started',
    'home.donate.title': 'Make a Donation',
    'home.donate.desc': 'Your contribution helps us, as student leaders, provide essential programs and peer support services to returnee students in need.',
    'home.donate.btn': 'Donate Now',

    'home.help.title': 'Need Help or Have Questions?',
    'home.help.desc': 'Our RH Assistant is here 24/7 to guide you through our programs and connect you with the support you need.',
    'home.help.chatHint': 'Look for the chat icon in the bottom right corner',

    'about.title': 'About Us',
    'about.subtitle': 'A student-led organization run by returnee high school students, for returnee high school students. We understand your journey because we\'re living it too.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'As returnee students ourselves, we\'re creating a peer-led ecosystem where fellow returnees can thrive academically, socially, and emotionally. We provide student-run programs, peer support networks, and a welcoming community that truly understands the unique challenges of cultural reintegration.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'A Japan where every returnee student feels valued, understood, and empowered to contribute their unique global perspective to society. We envision a future where cultural diversity is celebrated and returnees become bridges connecting Japan to the world.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Founded in 2020 by returnee high school students who felt the struggle firsthand, Returnees Hotline | Japan began as a small peer support group. What started with just a handful of students helping each other has grown into a comprehensive student-led organization serving hundreds of returnees annually.',
    'about.story.p2': 'As returnees ourselves, we intimately understand the challenges we all face: language barriers, cultural adjustment, identity questions, and academic pressures. Through our student-run programs and peer support network, we\'ve helped countless fellow students not just adapt, but thrive.',
    'about.story.p3': 'Today, our team of returnee student leaders continues to expand our reach, develop innovative peer-led programs, and advocate for better support systems for returnees throughout Japan.',
    'about.impact.title': 'Our Impact',
    'about.impact.subtitle': 'Student-led impact: Making a real difference in the lives of returnee students across Japan.',
    'about.impact.students': 'Students Supported',
    'about.impact.programs': 'Programs Run',
    'about.impact.volunteers': 'Student Volunteers',
    'about.impact.countries': 'Countries Represented',
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'Passionate returnee high school students leading the way and supporting their fellow returnees.',
    'about.team.btn': 'View Our Team',

    'footer.tagline': 'A student-led organization run by returnee high school students, for returnee high school students. Building a peer support community where every returnee can thrive.',
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.volunteer': 'Volunteer',
    'footer.contact': 'Contact Us',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': '2025 Returnees Hotline | Japan. All rights reserved.',

    'chat.title': 'RH Assistant',
    'chat.subtitle': 'Ask me anything about our programs!',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.programs': 'プログラム',
    'nav.getInvolved': '参加する',
    'nav.events': 'イベント',
    'nav.research': '研究',
    'nav.team': 'チーム',
    'nav.donate': '寄付',

    'home.badge': '帰国生による、帰国生のための団体',
    'home.title': '帰国生が',
    'home.titleHighlight': '日本で輝く',
    'home.subtitle': '帰国生高校生が運営する、帰国生高校生のための団体です。私たちも同じ経験をしてきたからこそ、あなたの気持ちが分かります。',
    'home.explorePrograms': 'プログラムを見る',
    'home.learnAbout': '詳しく見る',

    'home.programs.title': 'プログラム',
    'home.programs.desc': '帰国生が企画・運営する学習支援、交流プログラム、勉強会。あなたの悩みを理解する仲間がいます。',
    'home.support.title': 'サポート',
    'home.support.desc': 'ピアサポート、メンタルヘルスリソース、そしてあなたの気持ちが本当に分かる仲間のコミュニティ。',
    'home.community.title': 'コミュニティ',
    'home.community.desc': 'あなたの経験を理解し、お互いに支え合う帰国生仲間とつながりましょう。',

    'home.makeDifference': '今日から一歩を踏み出そう',
    'home.makeDifferenceDesc': '学生主導のコミュニティに参加して、全国の帰国生仲間を支えましょう。',
    'home.volunteer.title': 'ボランティアとして参加',
    'home.volunteer.desc': '帰国生としての経験を活かして、仲間の学生の移行期をメンターとしてサポートしましょう。',
    'home.volunteer.btn': '始める',
    'home.donate.title': '寄付で支援する',
    'home.donate.desc': 'あなたの寄付は、学生リーダーである私たちが、必要な帰国生仲間に重要なプログラムとピアサポートサービスを提供するために役立ちます。',
    'home.donate.btn': '寄付する',

    'home.help.title': 'ヘルプが必要ですか？',
    'home.help.desc': 'RHアシスタントが24時間365日、プログラムのご案内やサポートへのご案内をいたします。',
    'home.help.chatHint': '右下のチャットアイコンをご利用ください',

    'about.title': '私たちについて',
    'about.subtitle': '帰国生高校生による、帰国生高校生のための学生主導団体です。私たちも同じ経験をしているからこそ、あなたの気持ちが分かります。',
    'about.mission.title': '私たちのミッション',
    'about.mission.desc': '帰国生である私たち自身が、仲間の帰国生が学業面、社会面、そして心理面で成長できるピア主導のエコシステムを作っています。学生が運営するプログラム、ピアサポートネットワーク、そして文化的再統合の独特な課題を本当に理解するコミュニティを提供しています。',
    'about.vision.title': '私たちのビジョン',
    'about.vision.desc': 'すべての帰国生が評価され、理解され、独自のグローバルな視点を社会に貢献することができる日本を目指しています。文化的多様性が称賛され、帰国生が日本と世界をつなぐ架け橋となる未来を描いています。',
    'about.story.title': '私たちのストーリー',
    'about.story.p1': '2020年、自らの苦労を経験した帰国生高校生によって設立された Returnees Hotline | Japan は、小さなピアサポートグループとして始まりました。数人の学生がお互いを助け合うことから始まったものが、今では年間数百人の帰国生を支援する包括的な学生主導団体に成長しました。',
    'about.story.p2': '帰国生である私たちは、私たち全員が直面する課題を深く理解しています。言語の壁、文化的適応、アイデンティティの問題、学業のプレッシャー。学生が運営するプログラムとピアサポートネットワークを通じて、数多くの仲間の学生が適応するだけでなく、成長することを支援してきました。',
    'about.story.p3': '今日、帰国生学生リーダーのチームは、活動範囲を拡大し、革新的なピア主導プログラムを開発し、日本全国の帰国生のためのより良いサポートシステムを提唱し続けています。',
    'about.impact.title': '私たちの影響',
    'about.impact.subtitle': '学生主導の影響：日本全国の帰国生の生活に真の変化をもたらしています。',
    'about.impact.students': '支援した学生',
    'about.impact.programs': '実施したプログラム',
    'about.impact.volunteers': '学生ボランティア',
    'about.impact.countries': '代表国数',
    'about.team.title': 'チームを紹介',
    'about.team.subtitle': '仲間の帰国生を支え、道を切り開く情熱的な帰国生高校生たち。',
    'about.team.btn': 'チームを見る',

    'footer.tagline': '帰国生高校生による、帰国生高校生のための学生主導団体。すべての帰国生が活躍できるピアサポートコミュニティを構築しています。',
    'footer.quickLinks': 'クイックリンク',
    'footer.support': 'サポート',
    'footer.volunteer': 'ボランティア',
    'footer.contact': 'お問い合わせ',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.rights': '2025 Returnees Hotline | Japan. All rights reserved.',

    'chat.title': 'RHアシスタント',
    'chat.subtitle': 'プログラムについて何でも聞いてください！',
    'chat.placeholder': 'メッセージを入力...',
    'chat.send': '送信',
    'chat.thinking': '考え中...',
  },
};
