import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Registration } from './src/Registration/Registration';



export default function App() {
  return (
 <View style={styles.container}>
<Registration />
 </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
