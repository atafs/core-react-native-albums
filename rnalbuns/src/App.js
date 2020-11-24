// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import {View} from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

// Create a component
const App = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
