import { BarChart3, Home, MapPin, Settings, Users, Droplets, AlertCircle, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'الرئيسية', href: '/' },
    { icon: Droplets, label: 'المخزون', href: '/inventory' },
    { icon: MapPin, label: 'الخريطة', href: '/map' },
    { icon: BarChart3, label: 'الطلبات', href: '/requests' },
    { icon: TrendingUp, label: 'التقارير', href: '/reports' },
    { icon: Users, label: 'المستشفيات', href: '/hospitals' },
    { icon: AlertCircle, label: 'التنبيهات', href: '/alerts' },
    { icon: Settings, label: 'الإعدادات', href: '/settings' },
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground shadow-lg z-40">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">إدارة الدم</h1>
            <p className="text-xs text-sidebar-foreground opacity-75">مصر</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/10">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            د
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">د. أحمد محمد</p>
            <p className="text-xs text-sidebar-foreground opacity-75 truncate">مدير النظام</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
