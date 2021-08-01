import React from 'react';
import {View} from 'react-native';
import HomeNavigator from '../../navigations/HomeNavigator';

import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <HomeNavigator />
    </View>
  );
}
