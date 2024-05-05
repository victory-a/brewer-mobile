import React from 'react';
import { debounce } from 'lodash';

function useDebounceQuery(debounceTimeInMS = 600) {
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateQuery = React.useCallback(
    debounce((value) => {
      setDebouncedQuery(value);
    }, debounceTimeInMS),
    []
  );

  React.useEffect(() => {
    updateQuery(query);
    return () => {
      updateQuery.cancel();
    };
  }, [query, updateQuery]);

  return {
    query,
    setQuery,
    debouncedQuery
  };
}

export { useDebounceQuery };
