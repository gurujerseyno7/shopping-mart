import type { QueryFunction } from "@tanstack/react-query";
import type { PrimitiveTypes } from "../../../types/basicTypes";

//type for useTanStackQueryHook arguments
type useTanStackQueryHookTypes = {
  queryKey: PrimitiveTypes["string"][];
  queryFunction: QueryFunction<unknown, string[]>;
  enabled: PrimitiveTypes["boolean"];
};

export type { useTanStackQueryHookTypes };
