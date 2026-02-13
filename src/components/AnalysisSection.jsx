import React from 'react';
import { ArrowUp, ArrowDown, BarChart2 } from 'lucide-react';

const AnalysisCard = ({ title, factors, isRise }) => {
    return (
        <div className={`p-4 rounded-xl border ${isRise ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'} flex-1`}>
            <div className="flex items-center gap-2 mb-3">
                {isRise ? <ArrowUp className="text-green-500" size={18} /> : <ArrowDown className="text-red-500" size={18} />}
                <h3 className={`font-semibold ${isRise ? 'text-green-400' : 'text-red-400'}`}>{title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
                {factors.map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                        <span>{factor}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AnalysisSection = ({ metal, causes, demand, suppliers }) => {
    const isGold = metal.toLowerCase() === 'gold';

    return (
        <div className="glass-panel p-6 rounded-2xl mb-8">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-white">
                    <BarChart2 className={isGold ? 'text-gold' : 'text-silver'} />
                    Market Analysis: <span className={isGold ? 'text-gold' : 'text-silver'}>{metal}</span>
                </h2>
                <div className="flex gap-6 text-right">
                    <div>
                        <span className="text-xs text-gray-500 uppercase block">Active Suppliers</span>
                        <span className="text-lg font-mono font-medium text-white">{suppliers}</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 uppercase block">Est. Daily Demand</span>
                        <span className="text-lg font-mono font-medium text-white">{demand}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <AnalysisCard title="Bullish Factors (Rise)" factors={causes.rise} isRise={true} />
                <AnalysisCard title="Bearish Factors (Fall)" factors={causes.fall} isRise={false} />
            </div>
        </div>
    );
};

export default AnalysisSection;
