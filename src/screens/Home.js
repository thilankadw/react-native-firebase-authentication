import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/Coloros'
import { Auth } from '../services'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  
  const LogOut = (e) => {
    const response = Auth.SignOut();
    if(response){
      navigation.navigate('Main')
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>You have authenticated</Text>
        <View>
          <TouchableOpacity 
            onPress={LogOut}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
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

export default Home