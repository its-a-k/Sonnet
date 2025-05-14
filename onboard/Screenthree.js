import { Text, View } from 'react-native';
import OnboardScreen from './OnboardScreen.js';
import React from 'react';

const Screenthree = ({ navigation }) => {
  return (
    <OnboardScreen
    animationSource={require('../assets/onboard3.json')}
    title="Welcome to Our App"
    content="Discover amazing features and enjoy a seamless experience. Customize your settings and preferences to suit your needs."
    onNext={() => navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
        })}
    />
  );
};

export default Screenthree;