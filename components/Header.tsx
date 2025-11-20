import React from 'react';
import { CharacterData } from '../types';

interface HeaderProps {
  data: CharacterData;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const attrList = [
    { label: 'AGI', value: data.attributes.agi },
    { label: 'FOR', value: data.attributes.for },
    { label: 'INT', value: data.attributes.int },
    { label: 'PRE', value: data.attributes.pre },
    { label: 'VIG', value: data.attributes.vig },
  ];

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 pt-8 pb-4 px-4 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="flex items-center gap-4 mb-6">
        <div className="relative group">
            <div className="w-20 h-20 rounded-full border-2 border-amber-600/30 p-1 relative z-10 bg-zinc-950">
                <img 
                    src="https://picsum.photos/200/200" 
                    alt="Avatar" 
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
            {/* Decorative crosshair behind */}
            <div className="absolute -inset-2 border border-zinc-700 rounded-full opacity-30 scale-110"></div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
                <h1 className="text-2xl font-bold text-zinc-100 tracking-tight font-inter leading-none">
                {data.name.toUpperCase()}
                </h1>
                <div className="flex items-center gap-2 mt-1 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                    <span className="text-amber-500 font-bold">{data.class}</span>
                    <span>•</span>
                    <span>{data.origin}</span>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">NEX</span>
                <span className="text-xl font-mono font-bold text-zinc-100">{data.nex}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attributes Row - Stylized */}
      <div className="flex justify-between items-center mt-4 gap-2">
        {attrList.map((attr) => (
          <div key={attr.label} className="flex flex-col items-center relative group">
            {/* Hexagon Shape Simulation */}
            <div className={`w-12 h-12 flex items-center justify-center relative mb-1 transition-transform ${attr.value >= 3 ? 'scale-110' : ''}`}>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-zinc-800 fill-current drop-shadow-lg">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="currentColor" strokeWidth="2" fill={attr.value >= 3 ? '#451a03' : '#18181b'} className={attr.value >= 3 ? 'text-amber-900/50' : 'text-zinc-800'} />
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke={attr.value >= 3 ? '#d97706' : '#3f3f46'} strokeWidth={attr.value >= 3 ? '3' : '1'} />
                </svg>
                <span className={`relative z-10 font-mono font-bold text-lg ${attr.value >= 3 ? 'text-amber-500' : 'text-zinc-300'}`}>
                    {attr.value}
                </span>
            </div>
            <span className="text-[10px] font-bold text-zinc-500 tracking-widest font-inter">{attr.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
};