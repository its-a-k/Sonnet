import { Text, View } from 'react-native';
import OnboardScreen from './OnboardScreen.js';
import React from 'react';

const Screenone = ({ navigation }) => {
  return (
    <OnboardScreen
    animationSource={require('../assets/onboarded.json')}
    title="Welcome to Our App"
    content="Discover amazing features and enjoy a seamless experience. Customize your settings and preferences to suit your needs."
    onNext={() => navigation.navigate('onboard2')}
    onSkip={() => navigation.replace('login')}
    />
  );
};

export default Screenone;