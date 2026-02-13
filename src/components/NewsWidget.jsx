import React, { useState, useEffect } from 'react';
import { Newspaper, ArrowUpRight, ArrowDownRight, Radio, ExternalLink } from 'lucide-react';

const NEWS_DATA = [
    {
        id: 1,
        headline: "Gold Dips in India: Prices fall to ₹15,578/g",
        snippet: "Second consecutive day of decline. 24K gold down ₹262/g. Weak short-term structure below 21-day EMA.",
        source: "Domestic Market",
        sentiment: "bearish",
        prediction: "WAIT / BUY DIPS",
        time: "Just now"
    },
    {
        id: 2,
        headline: "Global Flash Crash Recovery",
        snippet: "Gold rebounds to $4,979/oz after brief dip to $4,900 driven by strong US Jobs data.",
        source: "Global Desk",
        sentiment: "neutral",
        prediction: "VOLATILITY ALERT",
        time: "5 min ago"
    },
    {
        id: 3,
        headline: "Silver Volatility: Rebounds to $78.59",
        snippet: "Silver surges 4.6% after 11% drop. Industrial demand remains robust despite PV thrifting concerns.",
        source: "Commodities Wire",
        sentiment: "bullish",
        prediction: "ACCUMULATE",
        time: "12 min ago"
    },
    {
        id: 4,
        headline: "Geopolitical Tensions Drive Safe Haven",
        snippet: "Russia-Ukraine & Middle East conflicts continue to support floor price despite strong dollar.",
        source: "Geopolitics",
        sentiment: "bullish",
        prediction: "STRONG BUY",
        time: "32 min ago"
    },
    {
        id: 5,
        headline: "Central Banks Buying Spree",
        snippet: "Goldman Sachs reports central banks targeting 20% reserve allocation. China accumulation continues.",
        source: "Inst. Research",
        sentiment: "bullish",
        prediction: "LONG TERM HOLD",
        time: "1 hr ago"
    }
];

const NewsWidget = () => {
    const [activeNews, setActiveNews] = useState(NEWS_DATA);

    // Simulate live updates by shuffling/rotating timestamp occasionally
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNews(prev => {
                const newArr = [...prev];
                // Move first item to end to simulate feed rotation or just refresh timestamps
                // For now, let's just keep it static-ish but animate the dot
                return newArr;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                    <Newspaper size={20} className="text-blue-400" />
                    World News & Signals
                </h2>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-xs text-red-400 font-mono uppercase tracking-wider">LIVE</span>
                </div>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {activeNews.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                {item.source}
                            </span>
                            <span className="text-xs text-gray-500 font-mono">{item.time}</span>
                        </div>

                        <h3 className="text-white font-medium mb-1 group-hover:text-blue-200 transition-colors">
                            {item.headline}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                            {item.snippet}
                        </p>

                        <div className={`flex items-center justify-between pt-3 border-t border-white/5`}>
                            <div className="flex items-center gap-2">
                                {item.sentiment === 'bullish' && <ArrowUpRight size={16} className="text-green-400" />}
                                {item.sentiment === 'bearish' && <ArrowDownRight size={16} className="text-red-400" />}
                                {item.sentiment === 'neutral' && <Radio size={16} className="text-gray-400" />}

                                <span className={`text-xs font-bold uppercase tracking-wider
                        ${item.sentiment === 'bullish' ? 'text-green-400' :
                                        item.sentiment === 'bearish' ? 'text-red-400' : 'text-gray-400'}`}>
                                    {item.prediction}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsWidget;
