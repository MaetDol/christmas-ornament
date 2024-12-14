class API {
  private async request<T>(url: string, options: RequestInit) {
    return fetch(url, options).then(this.handleResponse<T>);
  }

  private async handleResponse<T>(res: Response): Promise<T | string> {
    if (!res.ok) {
      throw res;
    }

    if (res.status >= 400) {
      throw res;
    }

    const contentType = res.headers.get('content-type');
    if (contentType === 'application/json') {
      return res.json();
    }

    return res.text();
  }

  public get<T>(url: string, options?: RequestInit) {
    return this.request<T>(url, {
      ...options,
      method: 'GET',
    });
  }

  public post<T>(url: string, options: RequestInit) {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
    });
  }

  public put(url: string, options: RequestInit) {
    return this.request(url, {
      ...options,
      method: 'PUT',
    });
  }

  public delete(url: string, options: RequestInit) {
    return this.request(url, {
      ...options,
      method: 'DELETE',
    });
  }

  public patch(url: string, options: RequestInit) {
    return this.request(url, {
      ...options,
      method: 'PATCH',
    });
  }
}

export { API };
