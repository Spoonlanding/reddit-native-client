import * as React from 'react';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { Font, AppLoading } from 'expo';
import reducers from './reducers';
import App from './App';

const store: any = createStore(
  reducers,
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Ionicons: require('ionicons/dist/fonts/ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    return this.state.isReady ? (
      <Provider store={store}>
        <App />
      </Provider>
    ) : (
      <AppLoading />
    );
  }
}
