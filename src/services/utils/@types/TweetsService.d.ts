interface TwitterUser {
  id: string;
  name: string;
  username: string;
  description: string;
}

interface TwitterPost {
  author_id: string;
  id: string;
  text: string;
  user: TwitterUser;
}