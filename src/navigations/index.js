import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserStack from './UserStack'; 
import AuthStack from './AuthStack'; 

import auth from '@react-native-firebase/auth'

const RootNavigation = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
      user ? <UserStack /> : <AuthStack />
  )

};

export default RootNavigation;