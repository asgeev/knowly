import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debounceSearchQuery, setDebounceSearchQuery] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearchQuery(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceSearchQuery;
};
