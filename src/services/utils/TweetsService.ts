import { AxiosResponse } from 'axios';
import HttpClient from "./HttpClient";

class TweetsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({baseURL: process.env.BACKEND_URL});
  }

  async listTweets(): Promise<TweetsPostsResponse> {
    const response: AxiosResponse<TweetsPostsResponse> = await this.httpClient.get('/latest-posts');

    return response.data;
  }
}

export default new TweetsService();