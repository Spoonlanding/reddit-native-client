import * as React from 'react';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducers from './reducers';
import App from './App';

const store: any = createStore(
  reducers,
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
