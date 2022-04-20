import { AxiosResponse } from 'axios';
import HttpClient from "./HttpClient";

interface ITwitterPost {
  author_id: string;
  text: string;
  id: string;
}

interface ITwitterUser {
  id: string;
  name: string;
  username: string;
  description: string;
  profile_image_url: string;
}

interface TwitterResponse {
  data: ITwitterPost[],
  includes: {
    users: ITwitterUser[]
  },
  meta: {
    newest_id: string;
    oldest_id: string;
    result_count: number;
    next_token: string;
  }
}

class TwitterService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({baseURL: 'https://api.twitter.com/2', config: {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      }
    }});
  }

  async listTweets(){
    const params = {
      max_results: '100',
      query: 'palmeiras',
      'user.fields': 'description,profile_image_url',
      expansions: 'author_id'
    }

    const searchParams = new URLSearchParams(params);
    
    const response: TwitterResponse = await this.httpClient.get(`tweets/search/recent?${searchParams.toString()}`);

    return response;
  }
}

export default new TwitterService();