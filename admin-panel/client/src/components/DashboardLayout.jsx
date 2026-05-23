import { Link, Outlet, useLocation } from 'react-router-dom';
import { HomeIcon, BriefcaseIcon, CodeBracketIcon, EnvelopeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function DashboardLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <HomeIcon className="w-5 h-5 mr-3" /> },
    { name: 'Projects', path: '/projects', icon: <BriefcaseIcon className="w-5 h-5 mr-3" /> },
    { name: 'Skills', path: '/skills', icon: <CodeBracketIcon className="w-5 h-5 mr-3" /> },
    { name: 'Messages', path: '/messages', icon: <EnvelopeIcon className="w-5 h-5 mr-3" /> },
    { name: 'Settings', path: '/settings', icon: <Cog6ToothIcon className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-6 text-2xl font-bold text-indigo-500 border-b border-gray-800">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold">{navItems.find(i => i.path === location.pathname)?.name || 'Dashboard'}</h1>
          <div className="text-gray-400 text-sm">Sohaib's Portfolio Admin</div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-black p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
