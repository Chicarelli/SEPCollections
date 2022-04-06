import axios, { AxiosInstance } from 'axios';

interface IHttpClient {
  baseURL: string|undefined;
  config?: {};
}

class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor({baseURL, config}: IHttpClient) {
    this.instance = axios.create({
      baseURL,
      ...config
    });
  }

  async get(path: string) {
    const response = await this.instance.get(path);

    return response.data;
  }

  async post(path: string, data: {}) {
    const response = await this.instance.post(path, data);

    return response;
  }

}

export default HttpClient;