import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';
import { useState } from 'react';

const { height } = Dimensions.get('window');

const Register = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
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

      {/* Repeat Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.tickcontainer}>
      <CheckBox
        style={{ flex: 1, padding: 10, }}
        checkBoxColor='rgb(0, 110, 255)'
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}
        rightText={<Text style={{fontSize: 13,}}>I accept the {""}
    <Text style={{ color: 'rgb(0, 110, 255)', }}
      onPress={() => Linking.openURL('https://echoquill.one/')}>
      terms & conditions
    </Text>
    {""} and agree to the {""}
    <Text style={{ color: 'rgb(0, 110, 255)', }}
      onPress={() => Linking.openURL('https://echoquill.one/')}>
      privacy policy
    </Text>
  </Text>}
      />
    </View>

      {/* Sign in Button */}
      <TouchableOpacity onPress= {() =>navigation.navigate('login')} style={styles.button}>
        <Text style={{color: 'white', fontSize:14}}>Register</Text>
      </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Text>Already have an account?</Text>
      <TouchableOpacity onPress= {() =>navigation.navigate('login')}><Text style={styles.forgotText}> Sign up here..</Text></TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
    </SafeAreaView>
  )
}

export default Register

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

  forgotText: {
    color: '#007AFF',
    fontSize: 14,
  },

  button: {
    backgroundColor: 'rgb(0, 166, 255)',
    paddingVertical: 12,
    marginHorizontal: 100,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 60,
  },

  tickcontainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  }
})