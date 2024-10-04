import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Users, FileText, Settings, LogOut } from 'lucide-react';
import { SIDEBAR_ITEMS } from './constant';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={`bg-white w-64 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed left-0 top-0 h-full z-30 lg:relative lg:translate-x-0`}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">CliniQX</h2>
        <nav>
          <ul className="space-y-2">
            {SIDEBAR_ITEMS.map((item, index) => (
              <li key={index}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.icon === 'Home' && <Home className="mr-2" />}
                  {item.icon === 'Users' && <Users className="mr-2" />}
                  {item.icon === 'FileText' && <FileText className="mr-2" />}
                  {item.label}
                </Button>
              </li>
            ))}
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2" /> Logout
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;