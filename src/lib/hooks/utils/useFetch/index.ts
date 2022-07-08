import { useEffect, useState } from 'react';
import { ApiProps, ApiResult } from './types';

export function useFetch<T, V>({ api, loadOnMount = true, props }: ApiProps<T, V>): ApiResult<T, V> {
  const [data, setData] = useState<T | undefined>(undefined!);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setIsLoading] = useState(false);

  const execute = async (values?: V) => {
    setIsLoading(true);

    try {
      const res = (await api(props || values)) as any;

      setData(res);
      setError(undefined);
    } catch (err) {
      setData(undefined);
      setError((err as any).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (loadOnMount) execute();
  }, []);

  return { execute, data, error, loading };
}
