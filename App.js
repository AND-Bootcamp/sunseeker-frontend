import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Animated, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import 'react-native-gesture-handler';
import HomeScreen from './pages/HomeScreen';
import ConfigurationScreen from './pages/ConfigurationScreen';
import ProfileScreen from './pages/ProfileScreen';
import OfficesScreen from './pages/OfficesScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
      <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarActiveTintColor: "#FF323C",
                  headerTitleStyle: {display: 'none'},
                  tabBarIcon: ({ focused }) => {
                    let iconName;
        
                    if (route.name === 'Map') {
                      return (
                        iconName = focused
                          ? <FontAwesome name="map" size={24} color="#FF323C" />
                          : <FontAwesome name="map" size={24} color="#323232" />
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
    </>
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
