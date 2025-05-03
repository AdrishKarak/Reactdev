import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result[currency] || {});
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch currency data:", err);
            }
        }

        fetchCurrencyData();
    }, [currency]);

    return { data, error };
}

export default useCurrencyInfo;