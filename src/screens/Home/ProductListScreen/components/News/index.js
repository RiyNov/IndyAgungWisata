import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default function News() {
  return (
    <View style={styles.container}>
      <View style={styles.newsBox}>
        <Text style={styles.newsText}>Kolom Berita</Text>
      </View>
    </View>
  );
}
