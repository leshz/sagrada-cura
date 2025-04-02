interface ApiOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export const fetchApi = async <T>(
  endpoint: string,
  options?: ApiOptions
): Promise<ApiResponse<T>> => {
  const baseUrl = `${process.env.DOMAIN}/api`;
  const url = `${baseUrl}${endpoint}`;

  const defaultHeaders = {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    'Content-Type': 'application/json'
  };

  const config: RequestInit = {
    ...options,
    method: options?.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options?.headers
    }
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`${endpoint} - ${response.statusText}`);
    }

    const { data } = await response.json();
    return {
      data,
      status: response.status,
      statusText: response.statusText
    };
  } catch (error) {
    throw new Error(`request failed: ${error instanceof Error ? error.message : 'unknown error'}`);
  }
};