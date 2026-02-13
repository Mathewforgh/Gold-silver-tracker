
// Simulation constants - Prices in INR per 1 gram (Based on Feb 2026 Live Market)
// Gold (24K) ~ ₹1,58,400 / 10g -> ₹15,840 / 1g
// Silver (99.9%) ~ ₹2,80,000 / 1kg -> ₹280 / 1g
const GOLD_BASE_PRICE = 15840.00; // INR per 1g
const SILVER_BASE_PRICE = 280.00; // INR per 1g
const VOLATILITY_GOLD = 25.0; // Volatility for ~15k price
const VOLATILITY_SILVER = 1.50; // Volatility for ~280 price

export const MARKET_CAUSES = {
    gold: {
        rise: [
            "Weakening US Dollar makes gold cheaper for foreign investors.",
            "Geopolitical tensions driving safe-haven demand.",
            "Central banks increasing gold reserves.",
            "Expectations of interest rate cuts by the Federal Reserve."
        ],
        fall: [
            "Strengthening US Dollar index (DXY).",
            "Higher bond yields increasing opportunity cost of holding gold.",
            "Positive economic data reducing recession fears.",
            "Hawkish comments from Federal Reserve officials."
        ]
    },
    silver: {
        rise: [
            "Increased industrial demand for solar panels and electronics.",
            "Supply deficits due to mining disruptions.",
            "Correlation with gold's upward momentum.",
            "Green energy transition policies boosting consumption."
        ],
        fall: [
            "Slowdown in manufacturing sector activity.",
            "Recession fears dampening industrial demand.",
            "Stronger US Dollar weighing on commodities.",
            "Increased recycling supply entering the market."
        ]
    }
};

export const MOCK_INAV = {
    gold: 15800.00, // Slightly lower than base to simulate premium/discount
    silver: 278.50,
};

// Helper to generate random price fluctuation
const getFluctuation = (volatility) => {
    return (Math.random() - 0.5) * volatility;
};

export const fetchMarketData = () => {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            const goldPrice = GOLD_BASE_PRICE + getFluctuation(VOLATILITY_GOLD);
            const silverPrice = SILVER_BASE_PRICE + getFluctuation(VOLATILITY_SILVER);

            resolve({
                gold: {
                    price: parseFloat(goldPrice.toFixed(2)),
                    change: parseFloat(getFluctuation(VOLATILITY_GOLD * 0.01).toFixed(2)),
                    iNav: MOCK_INAV.gold,
                    demand: Math.floor(Math.random() * 50) + 10 + " kg", // Demand in kg
                    suppliers: Math.floor(Math.random() * 7) + 12, // Active suppliers (12-18)
                },
                silver: {
                    price: parseFloat(silverPrice.toFixed(2)),
                    change: parseFloat(getFluctuation(VOLATILITY_SILVER * 0.1).toFixed(2)),
                    iNav: MOCK_INAV.silver,
                    demand: Math.floor(Math.random() * 500) + 100 + " kg",
                    suppliers: Math.floor(Math.random() * 8) + 8, // Active suppliers (8-15)
                },
                timestamp: new Date().toISOString()
            });
        }, 500);
    });
};
