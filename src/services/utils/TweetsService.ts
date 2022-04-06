import { AxiosResponse } from 'axios';
import HttpClient from "./HttpClient";

class TweetsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({baseURL: 'http://localhost:8000'});
  }

  async listTweets(): Promise<TwitterPost[]> {
    const response: TwitterPost[] = await this.httpClient.get('/latest-posts');

    return response;
  }
}

export default new TweetsService();