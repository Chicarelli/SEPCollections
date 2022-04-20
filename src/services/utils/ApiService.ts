import HttpClient from './HttpClient';

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

class ApiService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({
      baseURL: process.env.NEXT_PUBLIC_API_URL
    })
  }

  async listTweets() {
    const response = await this.httpClient.get(`tweets`);

    return response;
  }
}

export default new ApiService;