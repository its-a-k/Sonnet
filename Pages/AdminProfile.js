import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AdminProfile = ({navigation}) => {
  return (
    // <SafeAreaView>
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/profilepicture.png")} style={styles.image}/>
        </View>
        <Text style={styles.text}>John Doe</Text>
        <Text style={{marginTop:5}}>717821f110@kce.ac.in</Text>
        <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={styles.button}><Text style={{color:"white"}}>EditProfile</Text></TouchableOpacity>
    
    <View style={styles.textWrapper}>
        <Text>My Details</Text>
    </View>
        <View style={styles.boxContainer}>

        </View>

        <View style={styles.textWrapper}>
        <Text>My Details</Text>
    </View>
        <View style={styles.boxContainer}>

        </View>
    
    
    </SafeAreaView>
  )
}

export default AdminProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
        marginTop: 100,
    },

    button: {
    backgroundColor: 'rgb(0, 166, 255)',
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    },

    imageContainer: {
        width: 100,
        height: 100,
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
    marginLeft: 20,           // Optional: add spacing from left
    marginVertical: 20,       // Optional: add spacing from top and bottom
  },

  boxContainer: {
    width: '95%',
    height: 300,
    backgroundColor: 'rgb(212, 239, 255)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})