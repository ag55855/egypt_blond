import { Search, Bell, Mail, Calendar, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 right-64 left-0 h-16 bg-white border-b border-border shadow-sm z-30">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="البحث في الدليل..."
              className="pr-10 bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Right Section - Icons and User */}
        <div className="flex items-center gap-4 mr-6">
          {/* Notification Bell */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-secondary"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>

          {/* Mail Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </Button>

          {/* Calendar Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary"
          >
            <Calendar className="w-5 h-5 text-foreground" />
          </Button>

          {/* Divider */}
          <div className="w-px h-6 bg-border"></div>

          {/* User Profile */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-secondary"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
              د
            </div>
            <span className="text-sm font-medium text-foreground">د. لي بوك</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
