import React, { useState } from 'react'
import { Callout, Marker } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

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
    </View>
    );
}

const MarkerPin = ({ index, lat, lon, uvLevel, uvValue }) => {
    const [toolTip, setToolTip] = useState(false);

  return (
    <Marker
        key={index}
        coordinate={{
            latitude: lat,
            longitude: lon,
        }}
        title="Sunny location"
        description="This is the one closest to you"
        onPress={() => {
            setToolTip(true)
        }}
        >
            <Callout
                isVisible={toolTip}
                placement="top"
                onClose={() => setToolTip(false)}
            >
                <TouchableOpacity style={styles.touchable}>
                    <SunnyIcon uvLevel={uvLevel} />
                    <Text color="#FF323C">{uvValue}</Text>
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