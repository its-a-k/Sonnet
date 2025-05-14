// import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screenone from './onboard/Screenone';
import Screentwo from './onboard/Screentwo';
import Screenthree from './onboard/Screenthree';
import Login from './Auth/Login';
import Register from './Auth/Register';
import EditProfile from './Pages/EditProfile';

import BelowNavbar from './Components/BelowNavbar'; // import bottom tabs

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
  <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
 <NavigationContainer>
 <Stack.Navigator initialRouteName="onboard1">
 <Stack.Screen name="onboard1" component={Screenone} options={{ headerShown: false }}/>
 <Stack.Screen name="onboard2" component={Screentwo} options={{ headerShown: false }}/>
 <Stack.Screen name="onboard3" component={Screenthree} options={{ headerShown: false }}/>
 <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
 <Stack.Screen name="register" component={Register} options={{ headerShown: false }}/>
 {/* Bottom Tabs go here */}
      <Stack.Screen name="MainApp" component={BelowNavbar} options={{ headerShown: false }}/>
 <Stack.Screen name="editprofile" component={EditProfile} options={{ headerShown: false }}/>
 </Stack.Navigator>
 </NavigationContainer>
 </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
