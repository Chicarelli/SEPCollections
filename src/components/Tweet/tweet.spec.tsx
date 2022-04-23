import { render } from '../../test/utils';
import Tweet from './index';

test('it renders correctly', () => {
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