import { Text, View } from 'react-native';
import OnboardScreen from './OnboardScreen.js';
import React from 'react';

const Screentwo = ({ navigation }) => {
  return (
    <OnboardScreen
    animationSource={require('../assets/onboard2.json')}
    title="Welcome to Our App"
    content="amazing features and enjoy a seamless experience. Customize your settings and preferences to suit your needs."
    onNext={() => navigation.navigate('onboard3')}
    onSkip={() => navigation.replace('login')}
    />
  );
};

export default Screentwo;