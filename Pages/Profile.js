import { StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

const Profile = ({navigation}) => {
  return (
    // <SafeAreaView>
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/profilepicture.png")} style={styles.image}/>
        </View>
        <Text style={styles.text}>John Doe</Text>
        <Text style={{marginTop:5, opacity:0.5}}>+91 9876543210</Text>
        <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={styles.button}><Text style={{color:"white",}}>EditProfile</Text></TouchableOpacity>
    
    {/* First Box Heading*/}
    <View style={styles.textWrapper}>
        <Text>My Details</Text>
    </View>

    {/* First Box Content*/}
        <View style={styles.boxContainer}>

        {/* MyDetails 1 */}
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="person-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>717821F110</Text>

            {/* MyDetails 2 */}
            </View>
            <View style={styles.divider}></View>
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="card-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>Information Technology</Text>

            {/* MyDetails 3 */}
            </View>
            <View style={styles.divider}></View>
        <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="calendar-number-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>4th Year</Text>

        {/* MyDetails 4 */}
        </View>
            <View style={styles.divider}></View>
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="business-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>C Block - 105</Text>

        {/* </View>
            <View style={styles.divider}></View>
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Image
                    source={require('../assets/rollnumber.png')}
                    style={styles.icon}
                    resizeMode="contain"
                  />
            </View>
            <Text>717821F110</Text> */}
        </View>
        </View>

    {/* Second Box Heading */}
    <View style={styles.textWrapper}>
        <Text>Preferences</Text>
    </View>

    {/* Second Box */}
    <View style={[styles.boxContainer, {height: 180,}]}>

        {/* Preferences1 */}
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="moon-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>Dark Mode</Text>
            <View style={{marginLeft: 135,}}>
            <DarkModeToggle/>
            </View>
            </View>
            <View style={styles.divider}></View>

            {/* preferences2 */}
            <View style={styles.boxContent}>
            <View style={styles.iconBox}>
            <Ionicons name="document-outline" size={21} color="black" />
            </View>
            <Text style={styles.boxtext}>Letter Format</Text>
            <Ionicons name="arrow-forward-outline" size={23} color="black"  style={{marginLeft:135, opacity:0.5}}/>
            </View>
            <View style={styles.divider}></View>

            {/* preferences3 */}
        <View style={styles.boxContent}>
            <View style={[styles.iconBox, {backgroundColor: 'rgba(255, 0, 0, 0.11)'}]}>
            <Ionicons name="log-out-outline" size={21} color="red" />
            </View>
                 <Text style={styles.boxtext}>Logout</Text>
            </View>
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
        marginTop: 10,
    },

    boxtext: {
        fontSize: 18,
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
        marginTop: 40,
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
    height: 240,
    backgroundColor: 'rgb(238, 249, 255)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.30)',
    alignItems: 'center',

  },

  divider:{
    borderWidth:0.2,
    width:"84%",
    borderColor:'rgba(0, 0, 0, 0.30)'
  },

  iconBox: {
  backgroundColor: 'rgb(208, 243, 255)', // Box color
  padding: 10,                // Space *inside* the box
  marginRight: 30,                // Space *outside* the box
  borderRadius: 10,
  alignItems: 'center',       // Center image horizontally
  justifyContent: 'center',   // Center image vertically (if box has height)
},

  icon:{
  width: 22,
  height: 22,                // Space outside the image
  resizeMode: 'cover',
  },

    boxContent: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        width: '100%', 
        marginLeft: 60, 
        marginVertical: 9,
    },
})

//Switch component for dark mode toggle

const DarkModeToggle = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={{
        width: 52,
        height: 30,
        borderRadius: 60,
        backgroundColor: isEnabled ? '#007AFF' : '#ccc',
        justifyContent: 'center',
        paddingRight: 2,
      }}
    >
      <View
        style={{
          height: 18,
          width: 18,
          marginRight: 2,
          marginLeft: 2,
          borderRadius: 60,
          backgroundColor: '#fff',
          transform: [{ translateX: isEnabled ? 30 : 0 }],
        }}
      />
    </TouchableOpacity>
  );
};

