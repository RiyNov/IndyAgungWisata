import React, {useState} from 'react';
import {View} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainScreen from './MainScreen';

import styles from './styles';

export default function HomeScreen() {
  const [footerText, setfooterText] = useState('');

  return (
    <View style={styles.screen}>
      <Header />
      <MainScreen />
      <Footer footerText={footerText} />
    </View>
  );
}
