import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'USD' | 'INR' | 'AED' | 'SAR' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // Multiplier relative to USD
  prefix: boolean; // true = "$100", false = "100 AED"
  format: (amountInUSD: number) => string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    rate: 1,
    prefix: true,
    format: (usd) => `$${Math.round(usd).toLocaleString()}`
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    rate: 20,
    prefix: true,
    format: (usd) => `₹${Math.round(usd * 20).toLocaleString('en-IN')}`
  },
  AED: {
    code: 'AED',
    symbol: 'AED',
    rate: 3.67,
    prefix: false,
    format: (usd) => `${Math.round(usd * 3.67).toLocaleString()} AED`
  },
  SAR: {
    code: 'SAR',
    symbol: 'SAR',
    rate: 3.75,
    prefix: false,
    format: (usd) => `${Math.round(usd * 3.75).toLocaleString()} SAR`
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rate: 0.92,
    prefix: true,
    format: (usd) => `€${Math.round(usd * 0.92).toLocaleString()}`
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rate: 0.79,
    prefix: true,
    format: (usd) => `£${Math.round(usd * 0.79).toLocaleString()}`
  }
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  config: CurrencyConfig;
  detectedCountry?: string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: (usd) => `$${usd}`,
  config: CURRENCIES.USD
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    const saved = localStorage.getItem('nab_currency') as CurrencyCode;
    if (saved && CURRENCIES[saved]) return saved;
    return 'INR';
  });

  const [detectedCountry, setDetectedCountry] = useState<string>('');

  useEffect(() => {
    // Check if user already manually selected currency
    if (localStorage.getItem('nab_currency')) return;

    // Auto-detect based on timezone first (instant, non-blocking)
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta') || timeZone.includes('Asia/Colombo')) {
        setCurrencyState('INR');
      } else if (timeZone.includes('Dubai') || timeZone.includes('Muscat')) {
        setCurrencyState('AED');
      } else if (timeZone.includes('Riyadh')) {
        setCurrencyState('SAR');
      } else if (timeZone.includes('London')) {
        setCurrencyState('GBP');
      } else if (timeZone.includes('Paris') || timeZone.includes('Berlin') || timeZone.includes('Rome') || timeZone.includes('Madrid') || timeZone.includes('Europe')) {
        setCurrencyState('EUR');
      }
    } catch (e) {
      // Fallback USD
    }

    // Secondary Async Geo-IP Check
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          setDetectedCountry(data.country_name || data.country_code);
          const country = data.country_code.toUpperCase();
          if (country === 'IN' && !localStorage.getItem('nab_currency')) setCurrencyState('INR');
          else if (country === 'AE' && !localStorage.getItem('nab_currency')) setCurrencyState('AED');
          else if (country === 'SA' && !localStorage.getItem('nab_currency')) setCurrencyState('SAR');
          else if (country === 'GB' && !localStorage.getItem('nab_currency')) setCurrencyState('GBP');
          else if (['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'].includes(country) && !localStorage.getItem('nab_currency')) {
            setCurrencyState('EUR');
          }
        }
      })
      .catch(() => {
        // Silent fallback
      });
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem('nab_currency', code);
  };

  const config = CURRENCIES[currency] || CURRENCIES.USD;

  const formatPrice = (amountInUSD: number) => {
    return config.format(amountInUSD);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, config, detectedCountry }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
