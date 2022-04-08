import { AxiosResponse } from 'axios';
import HttpClient from "./HttpClient";

export interface IListTweets {
  author_id: string;
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    username: string;
    description: string;
    profile_image_url: string;
  }
} 
class TweetsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({baseURL: 'http://localhost:8000'});
  }

  async listTweets(): Promise<IListTweets[]> {
    const response: IListTweets[] = await this.httpClient.get('/latest-posts');

    return response;
  }
}

export default new TweetsService();