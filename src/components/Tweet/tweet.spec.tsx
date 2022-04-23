import { render } from '../../test/utils';
import Tweet from './index';

describe('component Tweet', () => {

  it('renders correctly', () => {
    const { getByText } = render(
      <Tweet 
        id="1" 
        name="John Doe" 
        username="johndoe" 
        text="Twitter Content" 
        img=""
        />
      );
    
      expect(getByText('Twitter Content')).toBeTruthy();
  })

})

test('link is correct', () => {
  const element = render(
    <Tweet
      id="1" 
      name="John Doe" 
      username="johndoe" 
      text="Twitter Content" 
      img=""
    />
  );
  const link = element.getByRole('link')

  expect(link).toMatchSnapshot();
})