import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.button}><Text>Go to Profile</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'rgb(0, 110, 255)',
    },

    button: {
    backgroundColor: 'rgb(0, 166, 255)',
    padding: 12,
    borderRadius: 20,
    },
})