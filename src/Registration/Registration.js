import React, { userState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom'
import { EnterUsername } from './Name';
import { EntereUsersurname } from './Surname';
import { EnterEmail } from './Email';
import { Password } from './Passvord';
import { NavigationContainer } from '@react-navigation/native';



export const Registration = () => {
return (
    <View style={styles.View}>
    <EnterUsername />
    <EntereUsersurname />
    <EnterEmail />
    <Password />
    <Button style={styles.Button}
    title="continue"
    onPress={() => navigation.navigate('user')}
    />
    </View>
)

};

const styles = StyleSheet.create ({
    View: {
       
    },
    Button: {
        color: '#0000ff'
    }
})