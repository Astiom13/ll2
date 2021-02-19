import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/Log-in';
import { Registration } from './src/Registration/Registration';
import { User } from './src/user/user';



export default function App() {
  return (
 <View style={styles.container}>
  <Login />
 </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  }
});
