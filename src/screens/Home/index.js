import React, {useState} from 'react';
import {View} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductDetailScreen from './ProductDetailScreen';
import ProductListScreen from './ProductListScreen';

import styles from './styles';

export default function HomeScreen() {
  const [footerText, setfooterText] = useState('');

  return (
    <View style={styles.screen}>
      <Header />
      <ProductListScreen />
      {/* <ProductDetailScreen /> */}
      <Footer footerText={footerText} />
    </View>
  );
}
