import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Coloros'

const Main = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <View>
                <View>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => {navigation.navigate('Register')}}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: COLORS.black
    },
    text: {
        color: COLORS.white,
        fontSize: 30,
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

});

export default Main