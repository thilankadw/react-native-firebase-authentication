import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/Coloros'
import { useNavigation } from '@react-navigation/native';
import { Auth } from '../services';

const Register = () => {

    const navigation = useNavigation();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const Register = (e) => {
        const response = Auth.SignUp(email, password)
        console.log(response,'response register')
        if(response){
            navigation.navigate('Home')
        }
    }

    return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>Register</Text>
            <View>
                <TextInput 
                    style={styles.textinput}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setemail(text)}
                />
            </View>
            <View>
                <TextInput 
                    style={styles.textinput}
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={Register}
                    style={styles.buttonContainer}
                > 
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {navigation.goBack()}}
                    style={styles.backbuttonContainer}
                > 
                    <Text style={styles.backbuttonText}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black,
        gap: 20
    },
    text: {
        color: COLORS.white,
        fontSize: 30,
    },
    textinput: {
        borderWidth: 1,
        borderColor: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginTop: 10,
        color: COLORS.white,
        width: 200,
    },
    buttonContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.black,
        fontSize: 18,
        textAlign: 'center',
    },
    backbuttonContainer: {
        backgroundColor: COLORS.black,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        color: COLORS.white
    },
    backbuttonText: {
        color: COLORS.white,
        fontSize: 18,
        textAlign: 'center',
    },
})


export default Register