import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
// Added import statement for React
import React from 'react';
import FeedScreen from './components/feed';

// Removed unnecessary import statement for React

export default function App() {
  return (
    <View style={{flex:1}}>
      <FeedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
