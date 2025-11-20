import React from 'react';
import { CharacterData } from '../types';

interface StatusBarsProps {
  stats: CharacterData['stats'];
}

export const StatusBars: React.FC<StatusBarsProps> = ({ stats }) => {
  const getPercent = (current: number, max: number) => Math.min(100, Math.max(0, (current / max) * 100));

  return (
    <div className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-20 shadow-xl">
      <div className="grid grid-cols-3 gap-px bg-zinc-800"> {/* Gap for vertical dividers */}
        
        {/* PV - Vida */}
        <div className="bg-zinc-950 p-3 flex flex-col relative group">
            <div className="flex justify-between items-end mb-1 relative z-10">
                <span className="text-[10px] font-bold text-red-600 tracking-widest">PV</span>
                <span className="font-mono font-bold text-lg text-white leading-none">
                    {stats.pv.current}<span className="text-zinc-600 text-xs">/{stats.pv.max}</span>
                </span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-red-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                    style={{ width: `${getPercent(stats.pv.current, stats.pv.max)}%` }}
                />
            </div>
        </div>

        {/* SAN - Sanidade */}
        <div className="bg-zinc-950 p-3 flex flex-col relative">
            <div className="flex justify-between items-end mb-1 relative z-10">
                <span className="text-[10px] font-bold text-blue-600 tracking-widest">SAN</span>
                <span className="font-mono font-bold text-lg text-white leading-none">
                    {stats.san.current}<span className="text-zinc-600 text-xs">/{stats.san.max}</span>
                </span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                    style={{ width: `${getPercent(stats.san.current, stats.san.max)}%` }}
                />
            </div>
        </div>

        {/* PE - Esforço */}
        <div className="bg-zinc-950 p-3 flex flex-col relative">
            <div className="flex justify-between items-end mb-1 relative z-10">
                <span className="text-[10px] font-bold text-yellow-500 tracking-widest">PE</span>
                <span className="font-mono font-bold text-lg text-white leading-none">
                    {stats.pe.current}<span className="text-zinc-600 text-xs">/{stats.pe.max}</span>
                </span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-yellow-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    style={{ width: `${getPercent(stats.pe.current, stats.pe.max)}%` }}
                />
            </div>
        </div>

      </div>
    </div>
  );
};