import React from 'react';
import ReactDOM from 'react-dom';

import ReduxDemo from './ReduxDemo'
// Provider提供器，将store提供给provider内部组件
import {Provider} from 'react-redux'


import * as serviceWorker from './serviceWorker';
import store from './store';

const App=(
  <Provider store={store}>
      <ReduxDemo></ReduxDemo>
  </Provider>

)

ReactDOM.render(
 App,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
