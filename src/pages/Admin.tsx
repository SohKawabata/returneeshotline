import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './admin/Dashboard';
import EventsManager from './admin/EventsManager';
import ProgramsManager from './admin/ProgramsManager';
import TeamManager from './admin/TeamManager';
import ResearchManager from './admin/ResearchManager';
import NewsManager from './admin/NewsManager';
import UserManager from './admin/UserManager';

interface AdminProps {
  onNavigate: (page: 'home') => void;
}

export default function Admin({ onNavigate }: AdminProps) {
  const [currentSection, setCurrentSection] = useState('overview');
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'events':
        return <EventsManager />;
      case 'programs':
        return <ProgramsManager />;
      case 'team':
        return <TeamManager />;
      case 'research':
        return <ResearchManager />;
      case 'news':
        return <NewsManager />;
      case 'users':
        return <UserManager />;
      default:
        return null;
    }
  };

  return (
    <Dashboard
      onNavigate={onNavigate}
      onSectionChange={setCurrentSection}
      currentSection={currentSection}
    >
      {currentSection !== 'overview' && (
        <div className="p-8">
          {renderSection()}
        </div>
      )}
    </Dashboard>
  );
}
