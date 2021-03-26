import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { render} from 'react-dom'

export const Login = () => {
return (
<View style={styles.View}>
    <Text style={styles.Text}>
        Enter your E-mail
        <TextInput style={styles.TextInput} />
        and Password
        <TextInput style={styles.TextInput}
        secureTextEntry={true}
        /> 
        <Button 
        title="login"
        onPress={()=> navigator.Navigation ('user') }
        />
    </Text>
</View>
)
};

const styles = StyleSheet.create ({
    View: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    Text: {
        color: '#0000ff'
    },
    TextInput: {
        color: '#ffd700',
        borderWidth: 7,
        borderColor: '#fff8dc',
        backgroundColor: '#b22222x'
    }
})