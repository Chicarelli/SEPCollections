import { useEffect, useState } from 'react';

import Tweet from "../../components/Tweet";
import TweetsService from "../../services/utils/TweetsService";

import {
  Container,
  ListContainer
} from './styles';

const Twitters = () => {
  const [tweets, setTweets] = useState<TwitterPost[]>([]);

  useEffect(() => {
    TweetsService.listTweets()
      .then(response => {
        setTweets(response);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <Container>
      <ListContainer>
      {tweets.length > 0 && tweets.map((tweet) => (
        <Tweet 
        key={tweet.id}
        id={tweet.id}
        name={tweet.user.name}
        username={tweet.user.username}
        text={tweet.text}
        />
        ))}
      </ListContainer>
    </Container>
  )
}

export default Twitters;