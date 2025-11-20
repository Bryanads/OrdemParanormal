import React, { useState } from 'react';
import { CHARACTER_DATA } from './constants';
import { Header } from './components/Header';
import { StatusBars } from './components/StatusBars';
import { SkillsTab } from './components/SkillsTab';
import { InventoryTab } from './components/InventoryTab';
import { BottomNav } from './components/BottomNav';
import { Ghost } from 'lucide-react';

type TabType = 'skills' | 'inventory' | 'actions' | 'rituals';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('skills');

  // Placeholder component for empty tabs
  const PlaceholderTab = ({ title }: { title: string }) => (
    <div className="flex flex-col items-center justify-center h-64 text-zinc-700 animate-in fade-in">
      <Ghost size={48} strokeWidth={1} className="mb-4 opacity-50" />
      <p className="uppercase tracking-widest text-xs font-bold">{title} Vazio</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-900/50 selection:text-amber-100">
      
      <Header data={CHARACTER_DATA} />
      
      <StatusBars stats={CHARACTER_DATA.stats} />

      <main className="relative min-h-[50vh]">
        {activeTab === 'skills' && <SkillsTab skills={CHARACTER_DATA.skills} />}
        {activeTab === 'inventory' && <InventoryTab inventory={CHARACTER_DATA.inventory} />}
        {activeTab === 'actions' && <PlaceholderTab title="Ações de Combate" />}
        {activeTab === 'rituals' && <PlaceholderTab title="Grimório Ocultista" />}
      </main>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
      
    </div>
  );
};

export default App;