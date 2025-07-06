export type optionsCollection = {
  params?: { [key: string]: string }
  fetch?: any
  slug?: string
  next?: any
  cache?: string
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  meta: object | null
}
