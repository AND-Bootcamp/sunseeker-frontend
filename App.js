import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Animated, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './pages/HomeScreen';
import ConfigurationScreen from './pages/ConfigurationScreen';
import ProfileScreen from './pages/ProfileScreen';
import OfficesScreen from './pages/OfficesScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const globalStyles = require('./css-variables/Constants');

  const Tab = createBottomTabNavigator();

  return (
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <HomeScreen />
    // </View>

    <NavigationContainer>
      <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarActiveTintColor: "#FF323C",
                  tabBarActiveTintColor: "#323232",
                  tabBarIcon: ({ focused }) => {
                    let iconName;
        
                    if (route.name === 'Map') {
                      return (
                        iconName = focused
                          ? <FontAwesome name="map" size={24} color="#FF323C" />
                          : <Entypo name="map" size={24} color="#323232" />
                        );
                    } else if (route.name === "Profile") {
                      return (
                        iconName = focused
                        ? <FontAwesome name="user-o" size={24} color="#FF323C" />
                        : <FontAwesome name="user-o" size={24} color="#323232" />
                      )
                    } else if (route.name === 'Settings') {
                      return (
                      iconName = focused
                        ? <Entypo name="list" size={24} color="#FF323C" />
                        : <Entypo name="list" size={24} color="#323232" />
                       )
                    } else if (route.name === 'Offices') {
                      return (
                        iconName = focused
                        ? <MaterialCommunityIcons name="office-building" size={24} color="#FF323C" />
                        : <MaterialCommunityIcons name="office-building" size={24} color="#323232" />
                      )
                    }
                  },
                })
              }>
        <Tab.Screen name="Map" component={HomeScreen} />
        <Tab.Screen name="Offices" component={OfficesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={ConfigurationScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always '}} onLayout={onLayoutRootView}>
    //   <View style={{ flex: 1, alignItems: 'center'}}>
    //     <GoogleMap />
    //     <StatusBar
    //       style="auto"
    //     />
    //   </View>
    // </SafeAreaView>

    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <GoogleMap />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
