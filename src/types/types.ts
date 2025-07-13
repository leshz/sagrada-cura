/* eslint-disable @typescript-eslint/no-unused-vars */

// Tipos genéricos que mantienen la estructura específica pero retornan any
export interface APIResponseData<T = any> {
  id: number;
  [key: string]: any;
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

// Importar tipos específicos para servicios
export * from './services';

// Tipos para formularios
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

// Tipos para imágenes
export interface Picture {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  url: string
}

// Tipo genérico para productos (mantener compatibilidad)
export type Product = APIResponseData & {
  name: string;
  price: number;
  slug: string;
  stock: number;
  quantityCart?: number;
  id?: string;
  [key: string]: any;
}

// Aliases para mantener compatibilidad con código existente
// Estos tipos mantienen la estructura específica pero internamente son any
export type APIResponseData<TContentTypeUID = any> = APIResponseData<any>;
export type APIResponse<TContentTypeUID = any> = APIResponse<any>;
export type APIResponseCollection<TContentTypeUID = any> = APIResponseCollection<any>;
export type APIResponseCollectionMetadata = APIResponseCollectionMetadata;