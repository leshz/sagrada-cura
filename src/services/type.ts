export type optionsCollection = {
  params?: { [key: string]: string }
  fetch?: any
  slug?: string
  next?: any
  cache?: string
}

export interface APIResponse<T> {
  data: T;
  status: number;
  statusText: string;
  meta: object | null
}
