/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './src/config/Routes';
import {Provider} from 'react-redux'
import store from './src/store'
const App = () => <Provider store={store}><Routes /></Provider>
  

export default App;
