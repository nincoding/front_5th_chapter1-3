import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals,
): T {
  const memoized = useRef<{ deps: DependencyList; value: T } | null>(null);

  if (!memoized.current || !equals(memoized.current.deps, deps)) {
    memoized.current = { deps, value: factory() };
  }

  return memoized.current.value;
}
