import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Image, Header
} from 'react-native';


export default function OfficeScreen() {

  const DATA = [
    {
      "latitude": 51.923590740502085,
      "longitude": 4.4691560865301,
      "office_name": "Club Koolhaas Rotterdam",
      "office_address": {
        "street": "Stationsplein 45",
        "address_line": "4th floor",
        "zip_code": "3013 AK",
        "city": "Rotterdam"
      },
      "image_url": "https://www.and.digital/hs-fs/hubfs/Rotterdam_jeroen_small-1.jpeg"
    },
    {
      "latitude": 52.366460172612385,
      "longitude": 4.880355337975704,
      "office_name": "Club Aletta Amsterdam",
      "office_address": {
        "street": "Raamplein 1",
        "address_line": "2ed Floor",
        "zip_code": "1016 XK",
        "city": "Amsterdam"
      },
      "image_url": "https://www.and.digital/hs-fs/hubfs/Aletta%20(1).jpg"
    },
    {
      "latitude": 52.366460172612385,
      "longitude": 4.880355337975704,
      "office_name": "Club Jemison",
      "office_address": {
        "street": "Marble Street",
        "address_line": "Block 17",
        "zip_code": "M2 3AW",
        "city": "Manchester"
      },
      "image_url": "https://www.and.digital/hs-fs/hubfs/Aletta%20(1).jpg"
    },
    {
      "latitude": 52.366460172612385,
      "longitude": 4.880355337975704,
      "office_name": "Club Woods",
      "office_address": {
        "street": "Foundry",
        "address_line": "6 Brindleyplace",
        "zip_code": "B1 2JB",
        "city": "Birmingham"
      },
      "image_url": "https://www.and.digital/hs-fs/hubfs/Aletta%20(1).jpg"
    },
    {
      "latitude": 52.366460172612385,
      "longitude": 4.880355337975704,
      "office_name": "Club Wangari",
      "office_address": {
        "street": "Runway East Bristol Bridge",
        "address_line": "1 Victoria St",
        "zip_code": "BS1 6AA",
        "city": "Bristol"
      },
      "image_url": "https://www.and.digital/hs-fs/hubfs/Aletta%20(1).jpg"
    }

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headeText}>Office Locations{"\n"}</Text>
      {DATA.map((location) => (
        <LocationItem location={location} />
      ))}
    </View>
  );
}


function LocationItem({ location }) {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  return (
    <TouchableOpacity style={[styles.item, !open && { height: 50 }]} onPress={onPress} activeOpacity={1}>
      <Text>{location.office_name}{"\n"}</Text>
      {open && (
        <View>

          <Text> {location.office_address.street}</Text>
          <Text> {location.office_address.address_line}</Text>
          <Text> {location.office_address.zip_code}</Text>
          <Text> {location.office_address.city}</Text>
          <Image source={{ uri: location.image_url }} />

        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  item: {
    width: '100%',
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 10,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  headeText: {
    color: "#FF0000",
    fontSize: 25,
    flexDirection: 'row',
    alignSelf: 'block-end',
    lineHeight: 30

  }
});