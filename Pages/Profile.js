import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({navigation}) => {
  return (
    // <SafeAreaView>
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/profilepicture.png")} style={styles.image}/>
        </View>
        <Text style={styles.text}>John Doe</Text>
        <Text style={{marginTop:5, opacity:0.5}}>717821f110@kce.ac.in</Text>
        <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={styles.button}><Text style={{color:"white",}}>EditProfile</Text></TouchableOpacity>
    <View style={styles.textWrapper}>
        <Text>My Details</Text>
    </View>
        <View style={styles.boxContainer}>
            <Text>Student ID</Text>
            <Text>Department</Text>
            <Text>Year</Text>
            <Text>Phone Number</Text>
            <Text>Address</Text>
        </View>

    <View style={styles.textWrapper}>
        <Text>Preferences</Text>
    </View>
        <View style={[styles.boxContainer, {height: 150}]}>
            <Text>Notification</Text>
            <Text>Dark Mode</Text>
            <Text>Language</Text>
        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(203, 236, 255)',
        // experimental_backgroundImage: 'linear-gradient(180deg, rgba(168, 228, 255, 0.86) 0%, rgba(255, 255, 255, 0.5) 100%)',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
        marginTop: 15,
    },

    button: {
    backgroundColor: 'rgb(0, 0, 0)',
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    },

    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(152, 219, 255)',
        resizeMode: 'cover'
    },

    textWrapper: {
    alignSelf: 'flex-start',  // Override horizontal alignment
    marginLeft: 40,           // Optional: add spacing from left
    marginVertical: 15,       // Optional: add spacing from top and bottom
    opacity: 0.6,          // Optional: set opacity to 0.5
  },

  boxContainer: {
    width: '93%',
    height: 300,
    backgroundColor: 'rgb(238, 249, 255)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})