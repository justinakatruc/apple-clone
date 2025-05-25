import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsername } from './actions';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Make sure this only runs on the client
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export function useFetchList(path: string, query: Object, config: any = {}) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(path, {
        params: { ...query },
        ...config
      });
      setData(response.data);
    };

    fetchData();
  }, [path, JSON.stringify(query), JSON.stringify(config)]);

  return [data];
}

export function useQuery(initialQuery: Object): [Object, (newQuery: Object) => void, () => void] {
  const [query, setQuery] = useState(initialQuery);

  const updateQuery = (newQuery: Object) => {
    setQuery((prevQuery) => ({ ...prevQuery, ...newQuery }));
  };

  const resetQuery = () => {
    setQuery(initialQuery);
  };
  return [query, updateQuery, resetQuery];
}

export function useUsername(): [string, () => Promise<void>] {
  const [username, setUsername] = useState("");

  const fetchUsername = async () => {
    const name = await getUsername();
    setUsername(name);
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  return [username, fetchUsername];
}