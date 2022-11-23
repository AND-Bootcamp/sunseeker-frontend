import React, { useState } from 'react'
import { Callout, Marker } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const MarkerPin = ({ index, lat, lon, uvLevel }) => {
    const [toolTip, setToolTip] = useState(false);
    const LATITUDE = 52.164610;
    const LONGITUDE = 4.481780;

    const uvLevelIcon = (uvLevel) => {
        const selectIcon = () => {
            switch(uvLevel) {
                case "LOW":
                    return "cloud";
                case "MODERATE":
                    return "partly-sunny";
                case "HIGH":
                    return "sunny";
                case "VERY_HIGH":
                    return "sunny";
                case "EXTREME":
                    return "sunny";    
                default:
                    return "rainy";
            }
        }
        return (
        <View style={styles.container}>
            <Text>Uv Level: {uvLevel}</Text>
            <Ionicons name={selectIcon(uvLevel)} size={24} color="#FF323C" style={styles.tooltipContainer} />
        </View>
        )
    }

  return (
    <Marker
        key={index}
        coordinate={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
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
                    {uvLevelIcon(uvLevel)}
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