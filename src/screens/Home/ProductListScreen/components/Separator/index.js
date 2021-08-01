import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Separator() {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00E936', '#008605']}>
        <View style={styles.container} />
      </LinearGradient>
    </View>
  );
}
