import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';

import App from '../../src/shared/App';
import { mockHTTPResponse } from '../MockUtils';

const mockStore = configureStore([thunk]);

describe('render </App>', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockHTTPResponse(200, null, '[]'))
    );
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('should render <App /> with default tweets from @cnnbrk', () => {
    const store = mockStore({ tweets: [] });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find('h1').text()).toEqual('Tweets from @cnnbrk');
  });

  it('should render <App /> with default tweets from @bbc', () => {
    const store = mockStore({ tweets: [] });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bbc-tweets']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find('h1').text()).toEqual('Tweets from @bbc');
  });
});
