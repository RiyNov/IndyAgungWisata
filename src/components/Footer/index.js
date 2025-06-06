import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Footer({navigation, footerText}) {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00E936', '#008605']}
        style={styles.container}>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => navigation.navigate('ItineraryScreen')}>
          <Text style={styles.text}>{footerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/images/whatsapp.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
