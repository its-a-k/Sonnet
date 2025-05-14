import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';

const { height } = Dimensions.get('window');

const OnboardScreen = ({animationSource, title, content, onSkip, onNext}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lottieWrapper}>
        <LottieView
          source={animationSource}
          autoPlay
          loop
          style={styles.lottie}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <View style={styles.buttonContainer}>
  {onSkip && (
    <TouchableOpacity onPress={onSkip} style={[styles.button,]}>
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
  )}
  <TouchableOpacity onPress={onNext} style={styles.button}>
    <Text style={styles.buttonText}>{onSkip ? 'Next' : 'Get Started'}</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: 'rgb(212, 239, 255)', // or your preferred background
    experimental_backgroundImage: 'linear-gradient(180deg, rgba(126, 214, 255, 0.79) 10%, rgba(255, 255, 255, 1) 100%)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  lottieWrapper: {
    height: height * 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  lottie: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 30,
    color: 'gray'
  },
  buttonContainer: {
  flexDirection: 'row',
  top: 100,
  gap: 90,
},
button: {
  backgroundColor: 'rgb(35, 139, 250)', // iOS blue
  paddingVertical: 10,
  paddingHorizontal: 50,
  borderRadius: 8,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
}
})