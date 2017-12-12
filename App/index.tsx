import React from 'react';
import { createStore } from 'redux';
import { Provider,  } from 'react-redux';
import appReducer from './reducers';
import App from './App';

const store: any = createStore(
    appReducer,
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
