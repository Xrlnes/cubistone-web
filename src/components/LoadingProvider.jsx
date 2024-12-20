import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingPage from './LoadingPage';

const LoadingContext = createContext({});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 saniye loading göster

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <LoadingPage />}
      {children}
    </LoadingContext.Provider>
  );
};