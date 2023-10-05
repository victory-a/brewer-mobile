import React from 'react';

function useCountDown(durationInSeconds: number): number {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setSeconds(durationInSeconds);

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return seconds;
}

export default useCountDown;
