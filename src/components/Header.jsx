import React from 'react';
import { Coins, TrendingUp, HelpCircle } from 'lucide-react';

const Header = () => {
    return (
        <header className="glass-panel sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg border-b border-white/10">
            <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold">
                    <Coins className="text-black w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gold-400 via-white to-silver-400 bg-clip-text text-transparent">
                    PreciousMetals<span className="font-light">Tracker</span>
                </h1>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
                <a href="#" className="hover:text-gold transition-colors flex items-center gap-2">
                    <TrendingUp size={16} /> Market
                </a>
                <a href="#" className="hover:text-silver transition-colors flex items-center gap-2">
                    <HelpCircle size={16} /> Analysis
                </a>
            </nav>

            <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 font-mono hidden sm:inline-block">
                    LIVE MARKET DATA
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
        </header>
    );
};

export default Header;
