import React from 'react';
import { Target, AlertCircle } from 'lucide-react';

const INavWidget = ({ metal, marketPrice, iNav }) => {
    const premium = ((marketPrice - iNav) / iNav) * 100;
    // Logic: Only "Buy" if price is at or below iNav (Discount/Fair Value).
    // If price > iNav, it's trading at a premium (Wait).
    const isGoodBuy = premium <= 0.5; // Allow slight premium

    const isGold = metal.toLowerCase() === 'gold';
    const themeColor = isGold ? 'text-gold' : 'text-silver';

    return (
        <div className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <h3 className={`text-sm font-medium uppercase tracking-widest text-gray-400 mb-4`}>{metal} Valuation</h3>

            <div className="flex justify-center items-end gap-8 w-full mb-6">
                <div className="text-right">
                    <span className="block text-xs text-gray-500 mb-1">Market Price</span>
                    <span className="text-xl font-mono text-white">₹{marketPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="text-left">
                    <span className="block text-xs text-gray-500 mb-1">iNav (Fair Value)</span>
                    <span className={`text-xl font-mono ${themeColor}`}>₹{iNav.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
            </div>

            <div className={`w-full py-3 rounded-lg border flex items-center justify-center gap-2 mb-2
        ${isGoodBuy
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                {isGoodBuy ? <Target size={18} /> : <AlertCircle size={18} />}
                <span className="font-bold tracking-wide">
                    {isGoodBuy ? 'RECOMMENDATION: BUY' : 'TRADING AT PREMIUM'}
                </span>
            </div>

            <p className="text-xs text-gray-500 mt-2">
                {premium > 0 ? `+${premium.toFixed(2)}% Premium` : `${premium.toFixed(2)}% Discount`}
            </p>
        </div>
    );
};

export default INavWidget;
