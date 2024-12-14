class API {
  private async request(url: string, options: RequestInit) {
    return fetch(url, options).then(this.handleResponse);
  }

  private async handleResponse(res: Response) {
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

  public get(url: string, options?: RequestInit) {
    return this.request(url, {
      ...options,
      method: 'GET',
    });
  }

  public post(url: string, options: RequestInit) {
    return this.request(url, {
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
