import { ReactElement } from "react";
import {
  Container,
  Avatar,
  Content
} from './styles';


interface TweetProps {
  img?: string;
  name: string;
  username: string;
  text: string;
}

const Tweet = ({img, name, username, text}: TweetProps): ReactElement => {
  return (
    <Container>
      <Avatar></Avatar>
      <Content>

      </Content>
    </Container>
  )
}

export default Tweet;