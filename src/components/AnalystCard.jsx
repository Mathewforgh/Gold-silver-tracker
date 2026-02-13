import React from 'react';
import { TrendingUp, Target, AlertCircle } from 'lucide-react';

const AnalystCard = ({ metal, targets, recommendation, potentialUpside }) => {
    const isGold = metal.toLowerCase() === 'gold';
    const themeColor = isGold ? 'text-gold' : 'text-silver';
    const borderColor = isGold ? 'border-gold/30' : 'border-silver/30';
    const bgGradient = isGold ? 'from-gold/5 via-transparent to-transparent' : 'from-silver/5 via-transparent to-transparent';

    return (
        <div className={`glass-panel p-6 rounded-2xl border ${borderColor} bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                        <Target size={16} className={themeColor} />
                        Analyst Targets (2025-26)
                    </h3>
                    <h2 className={`text-2xl font-bold mt-1 text-white capitalize`}>{metal} Outlook</h2>
                </div>
                <div className={`px-3 py-1 rounded-full border ${borderColor} bg-white/5`}>
                    <span className={`text-sm font-bold ${themeColor} flex items-center gap-1`}>
                        <TrendingUp size={14} />
                        {potentialUpside} Upside
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                {targets.map((target, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                        <span className="text-sm text-gray-400">{target.period}</span>
                        <div className="text-right">
                            <span className={`block font-mono font-bold ${index === targets.length - 1 ? 'text-lg ' + themeColor : 'text-white'}`}>
                                ₹{target.price}
                            </span>
                            <span className="text-xs text-gray-500">{target.note}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/5 border ${borderColor}`}>
                        <AlertCircle size={20} className={themeColor} />
                    </div>
                    <div>
                        <span className="text-xs text-gray-400 uppercase block">Expert Suggestion</span>
                        <span className="text-white font-medium text-sm leading-tight">{recommendation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalystCard;
