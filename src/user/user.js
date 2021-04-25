import { useNavigationBuilder } from '@react-navigation/core';
import React from 'react'
import { render } from 'react-dom'
import { TextInput, View, Text, StyleSheet, Button } from 'react-native'

export const User = () => {
   return(

        <View>
            <Text style={styles.Text}>Hello user create you cupping now</Text>
            <TextInput style={styles.TextInput} />
            <Button 
            title="Create new cupping"
            /> 
        </View>
   );
}

const styles = StyleSheet.create({
        Text: {
        backgroundColor: '#fff8dc',
        borderWidth: 5,
        borderRadius: 15,
        paddingEnd: 5,
        paddingStart: 550    
        },
        TextInput: {
            borderWidth: 7,
            borderColor: '#000000',
            textShadowColor: '#000080'
        },
        Button: {
            color: '#0000ff',
            alignItems: 'center'
        }
    })