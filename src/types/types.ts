export * from './services';


export interface APIResponseData<T = any> {
  id: number;
  attributes: T;
}

export interface APIResponseCollectionMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface APIResponse<T = any> {
  data: APIResponseData<T>;
}

export interface APIResponseCollection<T = any> {
  data: APIResponseData<T>[];
  meta: APIResponseCollectionMetadata;
}

export type StrapiBodyFormContact = {
  data: {
    nombre: string;
    telefono: string;
    email: string;
    asunto: string;
    nota: string;
  }
}

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface Picture {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  url: string
}

export type Product = APIResponseData & {
  name: string;
  price: number;
  slug: string;
  stock: number;
  quantityCart?: number;
  id?: string;
  [key: string]: any;
}
