import debounce from "lodash.debounce";
import { useCallback } from "react";

export function useDebounce(callback, delay) {
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay]
  );
  return debouncedFn;
}