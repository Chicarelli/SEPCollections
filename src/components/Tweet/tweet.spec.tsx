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
        img={process.env.IMAGE_URL || ""}
        />
      );
    
      expect(getByText('Twitter Content')).toBeTruthy();
  })

  it('renders correctly if there is no profile image', () => {
    const { queryByAltText } = render(
      <Tweet 
        id="1" 
        name="John Doe" 
        username="johndoe" 
        text="Twitter Content" 
        img=""
      />
    );

    expect(queryByAltText("profile")).toBeNull();
  })


  it('is link correct', () => {
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

})
