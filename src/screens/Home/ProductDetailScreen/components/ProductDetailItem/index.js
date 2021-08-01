import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function ProductDetailItem({month, totalSeat}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{month}</Text>
      <Text style={styles.text}>{totalSeat}</Text>
    </View>
  );
}
