import React from 'react';
import { InventoryItem } from '../types';
import { Package } from 'lucide-react';

interface InventoryTabProps {
    inventory: InventoryItem[];
}

export const InventoryTab: React.FC<InventoryTabProps> = ({ inventory }) => {
    return (
        <div className="p-4 pb-24 space-y-3 animate-in fade-in duration-500">
             <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Itens no Inventário</h2>
            {inventory.map((item, idx) => (
                <div key={idx} className="p-4 bg-zinc-900 border border-zinc-800 rounded flex items-center gap-4">
                    <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-zinc-500">
                        <Package size={20} />
                    </div>
                    <div className="flex-1">
                        <p className="text-zinc-200 font-medium">{item.name}</p>
                        <p className="text-xs text-zinc-600 font-mono mt-0.5">Peso: {item.slots}</p>
                    </div>
                </div>
            ))}
             <div className="mt-8 p-4 border border-dashed border-zinc-800 rounded text-center text-zinc-600 text-sm">
                Espaço disponível: 2/5
            </div>
        </div>
    )
}