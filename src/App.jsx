import React, { useState } from 'react';
import Header from './components/Header';
import MarketCard from './components/MarketCard';
import AnalysisSection from './components/AnalysisSection';
import INavWidget from './components/INavWidget';
import AnalystCard from './components/AnalystCard';
import NewsWidget from './components/NewsWidget';
import { useMarketData } from './hooks/useMarketData';
import { Loader2 } from 'lucide-react';

// Extracted Analyst Data (Simulation based on video insights)
const ANALYST_DATA = {
  gold: {
    targets: [
      { period: 'Sept 2025', price: '22,000', note: 'Target $3,700/oz' },
      { period: 'Dec 2025', price: '26,200', note: 'Target $4,400/oz' },
      { period: 'Jan 2026', price: '29,800', note: 'Target $5,000/oz' },
    ],
    recommendation: "STRONG BUY on dips. Breakout above ₹16k confirms vertical rally to ₹22k.",
    potentialUpside: "+88%"
  },
  silver: {
    targets: [
      { period: 'Sept 2025', price: '370', note: 'Target $42/oz' },
      { period: 'Dec 2025', price: '590', note: 'Target $67/oz' },
      { period: 'Jan 2026', price: '880', note: 'Target $100/oz' },
    ],
    recommendation: "AGGRESSIVE ACCUMULATION. Silver to outperform Gold with 3x upside potential.",
    potentialUpside: "+214%"
  }
};

function App() {
  const { data, loading, error } = useMarketData();
  const [activeTab, setActiveTab] = useState('gold');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <Loader2 className="animate-spin text-gold w-12 h-12" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-red-500">
        Error loading market data. Please try again.
      </div>
    );
  }

  const { gold, silver } = data;
  const activeData = activeTab === 'gold' ? gold : silver;
  const activeCauses = data.causes[activeTab];
  const activeAnalyst = ANALYST_DATA[activeTab];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-gold-500/30">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div onClick={() => setActiveTab('gold')} className={`cursor-pointer transition-transform ${activeTab === 'gold' ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}>
            <MarketCard metal="Gold" price={gold.price} change={gold.change} iNav={gold.iNav} />
          </div>
          <div onClick={() => setActiveTab('silver')} className={`cursor-pointer transition-transform ${activeTab === 'silver' ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'}`}>
            <MarketCard metal="Silver" price={silver.price} change={silver.change} iNav={silver.iNav} />
          </div>
        </div>

        {/* Analyst Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <INavWidget
            metal={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            marketPrice={activeData.price}
            iNav={activeData.iNav}
          />
          <AnalystCard
            metal={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            targets={activeAnalyst.targets}
            recommendation={activeAnalyst.recommendation}
            potentialUpside={activeAnalyst.potentialUpside}
          />
        </div>

        {/* Detailed Analysis & News Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalysisSection
              metal={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              causes={activeCauses}
              demand={activeData.demand}
              suppliers={activeData.suppliers}
            />
          </div>
          <div className="lg:col-span-1">
            <NewsWidget />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
