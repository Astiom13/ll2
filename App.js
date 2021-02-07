import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#a52a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
   color: '#4b0082'
  }
});
