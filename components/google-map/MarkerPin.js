import React, { useCallback, useState } from 'react'
import { Callout, Marker } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Popup, showLocation } from 'react-native-map-link';

const sunnyIconConfig = {
    "LOW":"cloud",
    "MODERATE":"partly-sunny",
    "HIGH":"sunny",
    "VERY_HIGH":"sunny",
    "EXTREME":"sunny",
}

const SunnyIcon = ({ uvLevel, uvValue }) => {
    return (
    <View style={styles.container}>
        <Text>Uv Level: {uvLevel}</Text>
        <Ionicons name={sunnyIconConfig[uvLevel]} size={24} color="#FF323C" style={styles.tooltipContainer} />
        <Text color="#FF323C">{uvValue}</Text>
    </View>
    );
}

const MarkerPin = ({ lat, lon, uvLevel, uvValue, location }) => {
    const handlePress = useCallback(
      () => {
        if (!location) return;

        showLocation({
            latitude: lat,
            longitude: lon,
            sourceLatitude: location.LATITUDE,
            sourceLongitude: location.LONGITUDE,
            dialogTitle: "Open in maps",
            dialogMessage: "What app would you like to use?",
            cancelText: "Cancel",
            directionsMode: 'walk',
            googleForceLatLon: true
        })
      },
      [location],
    );
    
    




  return (
    <Marker
        coordinate={{
            latitude: lat,
            longitude: lon,
        }}
        title="Sunny location"
        description="This is the one closest to you"
        >
            <Callout
                placement="top"
                onPress={handlePress}
            >
                <TouchableOpacity style={styles.touchable}>
                    <SunnyIcon uvLevel={uvLevel} uvValue={uvValue}  />
                </TouchableOpacity>
            </Callout>

        
    </Marker>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default MarkerPin;