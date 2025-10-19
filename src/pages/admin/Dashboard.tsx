import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, FileText, Calendar, Users, Newspaper, BookOpen, Settings, LogOut } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: 'home') => void;
  onSectionChange: (section: string) => void;
  currentSection: string;
  children?: React.ReactNode;
}

export default function Dashboard({ onNavigate, onSectionChange, currentSection, children }: DashboardProps) {
  const { user, userRole, signOut, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    onNavigate('home');
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'programs', label: 'Programs', icon: FileText },
    { id: 'team', label: 'Team Members', icon: Users },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'news', label: 'News', icon: Newspaper },
  ];

  if (isAdmin) {
    menuItems.push({ id: 'users', label: 'User Management', icon: Settings });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex h-screen">
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-900">CMS Dashboard</h1>
            <p className="text-sm text-slate-600 mt-1">{userRole}</p>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    currentSection === item.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-200 space-y-2">
            <div className="px-4 py-2">
              <p className="text-sm font-medium text-slate-900 truncate">
                {user?.email}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          {currentSection === 'overview' ? (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Welcome back!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.slice(1).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSectionChange(item.id)}
                      className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition text-left group"
                    >
                      <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Manage {item.label.toLowerCase()} content
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}
