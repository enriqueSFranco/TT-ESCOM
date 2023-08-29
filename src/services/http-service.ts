export const fetcher = () => {
  const customFetch = (endpoint: URL, options: RequestInit) => {
    const defaultHeaders: HeadersInit = {
      'Accept': 'application/json',
    }

    options.method = options.method || "GET"
    options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders

    if (options.body !== undefined) options.body = JSON.stringify(options.body)

    return fetch(endpoint, options)
      .then(response => response.ok ? response.json() : Promise.reject({ err: true, status: response.status || "00", statusText: response.statusText || "Oppps, ha ocurrido un error." }))
      .catch(error => {
        if (error instanceof Error) {
          throw new Error(`Error ${error.message}`)
        } else {
          throw new Error('Error no identificado')
        }
      })
  }

  const GET = (endpoint: URL, options: RequestInit) => customFetch(endpoint, options)

  const POST = (endpoint: URL, options: RequestInit) => {
    options.method = "POST"
    return customFetch(endpoint, options);
  };

  const PUT = (endpoint: URL, options: RequestInit) => {
    options.method = "PUT"
    return customFetch(endpoint, options);
  };

  const DEL = (endpoint: URL, options: RequestInit) => {
    options.method = "DELETE"
    return customFetch(endpoint, options);
  };

  return { GET, POST, PUT, DEL }
}