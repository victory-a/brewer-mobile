import { useState, useEffect, useCallback } from 'react';

interface AsyncState<T> {
  status: 'idle' | 'pending' | 'success' | 'error';
  value: T | null;
  error: Error | null;
}

interface UseAsync<T> {
  execute: (props?: any) => Promise<void>;
  status: AsyncState<T>['status'];
  value: AsyncState<T>['value'];
  error: AsyncState<T>['error'];
  isLoading: boolean;
}

const useAsync = <T>(asyncFunction: (props?: any) => Promise<T>, immediate = true): UseAsync<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    value: null,
    error: null
  });

  const execute = useCallback(
    (props = undefined): Promise<void> => {
      setState({ status: 'pending', value: null, error: null });
      return asyncFunction(props)
        .then((response) => {
          setState({ status: 'success', value: response, error: null });
        })
        .catch((error) => {
          setState({ status: 'error', value: null, error });
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      execute();
    }
  }, [execute, immediate]);

  const { value, status, error } = state;
  return { execute, value, status, error, isLoading: status === 'pending' };
};

export default useAsync;
