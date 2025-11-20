import React from 'react';
import { BookOpen, Backpack, Crosshair, Sparkles } from 'lucide-react';

type TabType = 'skills' | 'inventory' | 'actions' | 'rituals';

interface BottomNavProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChange }) => {
  const navItems = [
    { id: 'skills', label: 'Perícias', icon: BookOpen },
    { id: 'inventory', label: 'Inventário', icon: Backpack },
    { id: 'actions', label: 'Ações', icon: Crosshair },
    { id: 'rituals', label: 'Rituais', icon: Sparkles },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 pb-safe pt-2 px-2 z-50">
      <div className="flex justify-around items-end">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id as TabType)}
              className="flex flex-col items-center gap-1 p-2 w-16 relative group"
            >
              {/* Active Indicator Glow */}
              {isActive && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] rounded-full" />
              )}
              
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 1.5}
                className={`transition-colors ${isActive ? 'text-amber-100' : 'text-zinc-500 group-hover:text-zinc-300'}`}
              />
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-amber-500' : 'text-zinc-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe Area Spacer for iPhone X+ */}
      <div className="h-4 w-full"></div>
    </nav>
  );
};