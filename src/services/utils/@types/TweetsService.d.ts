interface TwitterPost {
  author_id: string;
  text: string;
  id: string;
}

interface TwitterUser {
  id: string;
  name: string;
  username: string;
  description: string;
}

interface TweetsPostsResponse {
  data: TwitterPost[],
  includes: {
    users: TwitterUser[]
  },
  meta: {
    newest_id: string;
    oldest_id: string;
    result_count: number;
    next_token: string;
  }
}