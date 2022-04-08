interface TwitterUser {
  id: string;
  name: string;
  username: string;
  description: string;
  profile_image_url: string;

}

interface TwitterPost {
  author_id: string;
  id: string;
  text: string;
  user: TwitterUser;
}