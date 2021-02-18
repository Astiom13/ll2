import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { render } from 'react-dom'

export const Password = () => {
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>
                 Enter your Password     
                <TextInput style={styles.TextInput} />
                </Text>
        </View>
            )
};
const styles = StyleSheet.create({
    Text:{
    color: '#f0f8ff',
    justifyContent: 'flex-start',
    alignItems: 'center'
    
    },
    TextInput: {
        backgroundColor: '#f0f8ff',
        color: '#0000ff'
    },
    View: {
        padding: 10,
        backgroundColor: '#000000'
    }
})
