import type { NextApiRequest, NextApiResponse } from 'next';
import http from 'http';
import TwitterService from '../../services/utils/TwitterService';
import Twitters from '../twitters';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
      user: foundUser
    });
  });

  res.status(200).json(latestPostsFromFans)

}