import React from 'react';
import { shallow } from 'enzyme';

import Tweet from '../../../src/shared/components/Tweet';

describe('render <Tweet />', () => {
  it('should render <Tweet /> with HTML tweet', () => {
    const wrapper = shallow(<Tweet tweet={'<b>My Tweet!</b>'} />);
    expect(wrapper.html()).toEqual('<div class="tweet "><b>My Tweet!</b></div>');
  });

  it('should render <Tweet /> with className inputted', () => {
    const wrapper = shallow(<Tweet tweet={'Tweet text'} className={'my-class'} />);
    expect(wrapper.props().className).toEqual('tweet my-class');
  });
});
