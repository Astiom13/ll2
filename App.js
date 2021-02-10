import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { User } from './src/user'


export default function App() {
  return (
 <View style={styles.container}>

  <User />
 </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#a52a2a',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
