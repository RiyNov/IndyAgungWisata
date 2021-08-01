import React from 'react';
import {View} from 'react-native';
import News from './components/News';
import ProductsList from './components/ProductsList';
import SearchInputBar from './components/SearchInputBar';
import Separator from './components/Separator';

import styles from './styles';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <SearchInputBar />
      <News />
      <Separator />
      <ProductsList />
    </View>
  );
}
