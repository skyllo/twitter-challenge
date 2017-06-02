import React from 'react';
import { render } from 'enzyme';

import Tweets from '../../../src/shared/components/Tweets';

describe('render <Tweets />', () => {
  it('should render <Tweets /> with no tweets', () => {
    const wrapper = render(<Tweets tweets={[]} />);
    expect(wrapper.find('.tweets').children()).toHaveLength(0);
  });

  it('should render <Tweets /> with three tweets', () => {
    const wrapper = render(<Tweets tweets={['one tweet', 'two tweet', 'three tweet']} />);
    expect(wrapper.find('.tweets').children()).toHaveLength(3);
  });
});
