import { ReactElement } from "react";
import Link from 'next/link';

import {
  Container,
  Avatar,
  Content
} from './styles';
import Image from "next/image";
interface TweetProps {
  id: string;
  img: string;
  name: string;
  username: string;
  text: string;
}

const Tweet = ({id,img, name, username, text}: TweetProps): ReactElement => {
  return (
    <Container>
      <Avatar>
        {img && <Image width={65} height={60} src={img} alt="profile"/>}
      </Avatar>
      <Content>
        <Link 
          href={`https://twitter.com/${username}/status/${id}`}
        >
          <a target="_blank">{name} <span>@{username}</span></a>
        </Link>

        <article>
          {text}
        </article>
      </Content>
    </Container>
  )
}

export default Tweet;