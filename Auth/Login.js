import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const { height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require('../assets/loginPhoto.png')}
      style={styles.image}
      resizeMode='cover'
      imageStyle={{ opacity: 0.8 }}
      >
    <View>
      <Text style={styles.text}>SONNET</Text>
      <Text style={{textAlign:'center', opacity: 0.6}}>Get Your Outpass Immediately with Hassle Free</Text>
    </View>
     <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Sign in</Text>
      <View style={styles.formContainer}>
        <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
       />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign in Button */}
      <TouchableOpacity onPress= {() =>navigation.replace('MainApp')} style={styles.button}>
        <Text style={{color: 'white', fontSize:14}}>Sign in</Text>
      </TouchableOpacity>
      </View>

      {/* Divider Line */}
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={{textAlign:'center', paddingHorizontal: 8, opacity: 0.6,}}>Sign in with</Text>
        <View style={styles.line} />
      </View>

        {/* Google Icon */}
      <TouchableOpacity>
      <Image
        source={require('../assets/google.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      </TouchableOpacity>
      
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Text>Don't have an Account yet?</Text>
      <TouchableOpacity onPress= {() =>navigation.reset({
        index: 0,
        routes: [{ name: 'register' }],
        })}>
        <Text style={[styles.forgotText, {opacity: 1}]}> Register..</Text></TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
      flex: 1,
      experimental_backgroundImage: 'linear-gradient(180deg, rgba(89, 203, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)',
  },
    
  image: {
    flex: 1,
    height: '80%',
    width: '100%',
  },

  text: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ' rgb(0, 110, 255)',
    marginTop: 40,
    letterSpacing: 4,
  },

  loginBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.6,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    alignItems: 'center',
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    color: 'rgb(0, 106, 255)',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    marginTop: 12,
    backgroundColor: 'rgb(222, 236, 255)',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#007AFF',
    fontSize: 14,
    opacity: 0.6,
  },

  button: {
    backgroundColor: 'rgb(0, 166, 255)',
    paddingVertical: 12,
    marginHorizontal: 100,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },

  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 50,
  },
})