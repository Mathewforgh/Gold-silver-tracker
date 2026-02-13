import { useState, useEffect } from 'react';
import { fetchMarketData, MARKET_CAUSES } from '../services/marketData';

export const useMarketData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let intervalId;

        const getData = async () => {
            try {
                const result = await fetchMarketData();
                setData((prev) => ({
                    ...result,
                    causes: MARKET_CAUSES // Attach static causes
                }));
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        getData(); // Initial fetch
        intervalId = setInterval(getData, 3000); // Poll every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return { data, loading, error };
};
