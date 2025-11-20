import React, { useState } from 'react';
import { CharacterData, Skill } from '../types';
import { ShieldCheck, Hexagon } from 'lucide-react';

interface SkillsTabProps {
  skills: Skill[];
}

export const SkillsTab: React.FC<SkillsTabProps> = ({ skills }) => {
  const [filter, setFilter] = useState<string>('TODOS');

  const filters = ['TODOS', 'AGI', 'FOR', 'INT', 'PRE', 'VIG'];

  const filteredSkills = skills.filter(skill => {
    if (filter === 'TODOS') return true;
    return skill.attr === filter;
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Filter Bar */}
      <div className="sticky top-[73px] z-10 bg-zinc-950/95 backdrop-blur-sm py-3 border-b border-zinc-800 overflow-x-auto">
        <div className="flex px-4 gap-2 min-w-max">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all
                ${filter === f 
                  ? 'bg-zinc-100 text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-600'}
              `}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Skill List */}
      <div className="p-4 space-y-2">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.name}
            className={`
              relative flex items-center justify-between p-4 rounded border transition-all
              ${skill.trained 
                ? 'bg-zinc-900/50 border-amber-900/30 shadow-[inset_0_0_20px_rgba(69,26,3,0.2)]' 
                : 'bg-transparent border-zinc-800/50 hover:bg-zinc-900/30'}
            `}
          >
            <div className="flex items-center gap-3">
               {/* Icon Logic */}
               <div className={`
                  w-8 h-8 rounded flex items-center justify-center
                  ${skill.trained ? 'bg-amber-500/10 text-amber-500' : 'bg-zinc-800 text-zinc-600'}
               `}>
                 {skill.trained ? <ShieldCheck size={18} strokeWidth={2.5} /> : <Hexagon size={18} strokeWidth={1.5} />}
               </div>
               
               <div className="flex flex-col">
                 <span className={`text-sm font-semibold ${skill.trained ? 'text-amber-100' : 'text-zinc-300'}`}>
                    {skill.name}
                 </span>
                 <span className="text-[10px] font-mono font-bold text-zinc-600">
                    {skill.attr}
                 </span>
               </div>
            </div>

            <div className="flex items-center">
                {skill.trained && (
                     <div className="mr-3 hidden sm:block">
                        <span className="text-[10px] uppercase tracking-widest text-amber-500/50 font-bold">Treinado</span>
                     </div>
                )}
                <span className={`
                    text-xl font-mono font-bold
                    ${skill.trained 
                        ? 'text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]' 
                        : 'text-zinc-400'}
                `}>
                    {skill.value >= 0 ? `+${skill.value}` : skill.value}
                </span>
            </div>

            {/* Decorative corner for trained skills */}
            {skill.trained && (
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/50"></div>
            )}
          </div>
        ))}
        
        {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-zinc-600">
                <p>Nenhuma perícia encontrada para este atributo.</p>
            </div>
        )}
      </div>
    </div>
  );
};