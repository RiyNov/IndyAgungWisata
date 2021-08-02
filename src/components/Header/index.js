import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import styles from './styles';

export default function Header({navigation, isSearch}) {
  const headerState = useSelector(state => state);

  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00E936', '#008605']}
        style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/burger_menu.png')}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{headerState.headerTitle}</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
          //   onPress={() => navigation.navigate('Mail')}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/icons/mail.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => navigation.navigate('UserProfile')}
          >
            <Image
              style={styles.middleIcon}
              source={require('../../assets/icons/people.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/camera.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
