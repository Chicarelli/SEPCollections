import { useEffect, useState } from 'react';
import Tweet from "../../components/Tweet";
import ApiService, { IPost, IMeta } from "../../services/utils/ApiService";

import {
  Container,
  ListContainer
} from './styles';

//ssr
import TwitterService from '../../services/utils/TwitterService';

interface TwittersProps {
  posts: IPost[],
  meta: IMeta
};
const Twitters = (props: TwittersProps) => {
  const [tweets, setTweets] = useState<IPost[]>(props.posts);
  const [meta, setMeta] = useState<IMeta>(props.meta);

  // useEffect(() => {
  //   ApiService.listTweets()
  //   .then(response => {
  //     setTweets(response.posts);
  //     setMeta(response.meta);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <Container>
      <ListContainer>
      {tweets.length > 0 && tweets.map((tweet) => (
        <Tweet 
        key={tweet.id}
        id={tweet.id}
        name={tweet.user.name}
        username={tweet.user.username}
        img={tweet.user.profile_image_url}
        text={tweet.text}
        />
      ))}
      </ListContainer>
    </Container>
  )
}

export default Twitters;

export async function getServerSideProps() {

  const allData = await TwitterService.listTweets();

  const posts = allData.data;
  const users = allData.includes.users;

  const postFromUsersPalmeirenses = posts.filter(post => {
    const foundUser = users.find((user) => user.id === post.author_id);
    if (!foundUser) return false;

    let isFan = false;
    let lowerDescription = foundUser.description.toLowerCase();

    if (foundUser.name.indexOf('sep') !== -1) isFan = true;
    if (lowerDescription.includes('palmeir')) isFan = true;
    if (lowerDescription.includes('verdão')) isFan = true;
    if (lowerDescription.includes('mancha verde')) isFan = true;

    return isFan;
  });

  const latestPostsFromFans = postFromUsersPalmeirenses.map(post => {
    const foundUser = users.find((user) => user.id === post.author_id);

    return ({
      ...post,
      user: foundUser,
    });
  });

  return {
    props: {
      posts: latestPostsFromFans,
      meta: allData.meta
    }
  }
}