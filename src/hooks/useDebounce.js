import { useEffect, useState } from "react";

const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 350);

    // it will call the cleanup function for the previous render before re-running
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
