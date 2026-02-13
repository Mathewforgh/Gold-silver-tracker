import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

const MarketCard = ({ metal, price, change, iNav }) => {
    const isPositive = change >= 0;
    const isGold = metal.toLowerCase() === 'gold';

    const accentColor = isGold ? 'text-gold' : 'text-silver';
    const borderColor = isGold ? 'border-gold/30' : 'border-silver/30';
    const glowColor = isGold ? 'shadow-gold/20' : 'shadow-silver/20';

    return (
        <div className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${glowColor}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className={`text-3xl font-bold capitalize ${accentColor} mb-1`}>{metal}</h2>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                        Spot Price {isGold ? '(1g, 24K)' : '(1g, 99.9%)'}
                    </span>
                </div>
                <div className={`p-3 rounded-full bg-white/5 border ${borderColor}`}>
                    <TrendingUp className={`w-6 h-6 ${accentColor}`} />
                </div>
            </div>

            <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-mono font-medium text-white">
                    ₹{price?.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div className={`flex items-center text-sm font-bold px-2 py-1 rounded ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isPositive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                    {Math.abs(change)}%
                </div>
            </div>

            <div className="w-full bg-gray-800/50 rounded-full h-1.5 mb-2 overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-1000 ${isGold ? 'bg-gold-500' : 'bg-silver-500'}`}
                    style={{ width: `${(Math.random() * 40) + 30}%` }} // Simplified visual representation
                ></div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
                <span>iNav: <span className="text-white font-mono">₹{iNav?.toLocaleString('en-IN')}</span></span>
                <span>Vol: High</span>
            </div>

            {/* Background decoration */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-10 ${isGold ? 'bg-gold' : 'bg-silver'}`}></div>
        </div>
    );
};

export default MarketCard;
