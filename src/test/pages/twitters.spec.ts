import { render } from '../utils';
import Twitters from '../../pages/twitters/index';
import { getServerSideProps } from '../../pages/twitters/index';

const mockSuccess = {
  data: [
    {
      author_id: '1',
      id: '1',
      text: 'Something'
    }],
    includes: {
      users: [
        {
          description: 'palmeiras',
          id: '1',
          name: 'Rafael',
          profile_image_url: '',
          username: 'chicarellir'
        }
      ]
    },
    meta: {
      newest_id: '1',
      oldest_id: '1',
      result_count: 100,
      next_token: '2'
    }
}

const pageProps = {
  posts: [{
    author_id: '1',
    id: '1',
    text: 'Something',
    user: {
      description: 'palmeiras',
      id: '1',
      name: 'Rafael',
      profile_image_url: '',
      username: 'chicarellir'
    }
  }],
  meta: {
    newest_id: '1',
    oldest_id: '1',
    result_count: 100,
    next_token: '2'
  }

}

jest.mock('../../services/utils/TwitterService', () => ({
  listTweets: () => mockSuccess
}));

describe('ServerSideProps', () => {

  it('it should format the data correctly', async () => {
    const response = await getServerSideProps();

    console.log('response: ',response);
    expect(response).toEqual(
      expect.objectContaining({
        props: pageProps
      })
    );
  });


})