import React from "react";
import { View, Button, Alert, Text, TextInput, StyleSheet} from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

const ProfileScreen = () => {
  console.log("ProfileScreen 01");
  const [text, onChangeText] = React.useState("Useless Text");
  
    return (

<View style={{ justifyContent: 'top', alignItems: 'left' }}>
    <View style={{ justifyContent: 'top', alignItems: 'left' }}>
        <Text style={{ fontSize: 24,
            fontWeight: 'bold',
            color: "#FF323C"  }}>Your Profile</Text>
    </View>
    <Separator />
    <View style={{ justifyContent: 'top', alignItems: 'left',
            padding: 5
            }}>
        <Text style={{ fontSize: 16, color: "#FF323C"   }}>You: </Text>

        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>Name:</Text>
            <TextInput style={styles.longInput}
                onChangeText={onChangeText}
                value="Paolo"
                />
        </View>
        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>Surname:</Text>
            <TextInput style={styles.longInput}
                onChangeText={onChangeText}
                value="Brunasti"
                />
        </View>
    </View>
    <Separator />
    <View style={{
//            flexDirection: "row",
            padding: 5,
            alignItems: 'top'
            }}>
        <Text style={{ fontSize: 16, color: "#FF323C" }}>Your Address: </Text>
        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>Street:</Text>
            <TextInput style={styles.longInput}
                onChangeText={onChangeText}
                value="Leuvenstraat 23"
                />
        </View>
        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>ZIP:</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value="1066 DZ"
                />
        </View>
        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>City:</Text>
            <TextInput style={styles.longInput}
                onChangeText={onChangeText}
                value="Amsterdam"
                />
        </View>
        <View style={{
                flexDirection: "row",
                padding: 3
                }}>
            <Text style={{ fontSize: 12, color: "#FF323C" }}>Country:</Text>
            <TextInput style={styles.longInput}
                onChangeText={onChangeText}
                value="Netherlands"
                />
        </View>

    </View>
    <Separator />
    <Separator />
    <View style={{
            flexDirection: "row",
            padding: 100,
            alignItems: 'right',
            width: 500
        }}>
        <Text> </Text>
        <Button color="#FF323C" background="#FF323C"
            title="Update Profile"
            onPress={() => Alert.alert('Profile saved')}
            />
    </View>
</View>

    )
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 100,
    margin: 2,
    borderWidth: 2,
    padding: 2, color: "#FF323C"
  },
  longInput: {
    height: 30,
    width: 250,
    margin: 2,
    borderWidth: 2,
    padding: 2, color: "#FF323C"
  },
 separator: {
   marginVertical: 8,
   borderBottomColor: '#737373',
   borderBottomWidth: StyleSheet.hairlineWidth,
 },
});


export default ProfileScreen;