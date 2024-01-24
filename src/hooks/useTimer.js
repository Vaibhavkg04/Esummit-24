import { useEffect, useState, useRef } from 'react';

// here sometimes the counter doesn't stop at end variable. No issue though, but a good problem to solve.
export const useTimer = (start, end) => {
  const [count, setCount] = useState(start);
  let interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1);
  }, []);

  if (count >= end) {
    clearInterval(interval.current);
  }

  return count;
};
