import HttpClient from './HttpClient';
export interface IPost {
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
export interface IMeta {
  newest_id: string;
  oldest_id: string;
}


interface ListTweetsReturn {
  posts: IPost[],
  meta: IMeta
}

class ApiService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({
      baseURL: process.env.NEXT_PUBLIC_API_URL
    })
  }

  async listTweets(): Promise<ListTweetsReturn> {
    const response = await this.httpClient.get(`tweets`);

    return response;
  }
}

export default new ApiService;