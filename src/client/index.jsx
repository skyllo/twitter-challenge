import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from '../shared/App';
import reducers from '../shared/reducers';

import './index.scss';

// create redux store
const store = createStore(reducers, {}, applyMiddleware(thunk));

const renderApp = () => {
  render(
    <AppContainer>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('../shared/App', () => renderApp());
  module.hot.accept('../shared/reducers', () => store.replaceReducer(reducers));
}
