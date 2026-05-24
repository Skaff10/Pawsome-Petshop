import { useState, useEffect } from 'react';
import { products, Product } from '@/lib/products';

export function useSearchProducts(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    const handler = setTimeout(() => {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10);
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  return { results, isLoading };
}
