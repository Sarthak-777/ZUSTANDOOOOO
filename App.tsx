/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Dashboard} from './src/screens';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return <Dashboard />;
}

export default App;
