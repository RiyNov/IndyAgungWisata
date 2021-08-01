import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function SearchInputBar({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      // onPress={() => navigation.navigate('Search')}
      >
        <View style={styles.subContainer}>
          <View style={styles.itemGroup}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../../../../assets/icons/search_grey.png')}
              />
            </View>
            <View>
              <Text style={styles.text}>Search by word or ad number</Text>
            </View>
          </View>
          <View style={styles.itemGroup}>
            <Image
              style={styles.middleIcon}
              source={require('../../../../../assets/icons/microphone.png')}
            />
            <Image
              style={styles.icon}
              source={require('../../../../../assets/icons/categorize.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
