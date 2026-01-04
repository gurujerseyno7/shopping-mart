//custom hook for tanstack query for data fetching

import { useQuery } from "@tanstack/react-query";
import type { useTanStackQueryHookTypes } from "./types/useTanStackQueryTypes";

const useTanStackQuery = ({
  queryKey,
  queryFunction,
}: useTanStackQueryHookTypes) => {
  const { data, error, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: queryFunction,
  });

  return { data, error, isLoading };
};

export { useTanStackQuery };
