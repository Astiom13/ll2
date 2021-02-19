import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';

export const EntereUsersurname = () => {
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>
               Enter your surname
             <TextInput style={styles.TextInput} />
            </Text>
        </View>
            )
};

const styles = StyleSheet.create ({
    Text:{
        color: '#f0f8ff',
        padding: 15,
        paddingEnd: 15
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