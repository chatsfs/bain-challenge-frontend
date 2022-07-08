export type ApiResult<T, V> = {
  execute: (values?: V) => Promise<void>;
  data: T | undefined;
  loading: boolean;
  error?: string;
};

export type ApiProps<T, V> = {
  props?: V;
  api: (props?: V) => Promise<T>;
  loadOnMount?: boolean;
};
