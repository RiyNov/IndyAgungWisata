import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

// Import vector icons
import Icon from 'react-native-vector-icons/Ionicons';

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
            <Icon
              name="menu"
              size={35}
              color="#fff"
              style={styles.burgerMenu}
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
            <Icon name="mail" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => navigation.navigate('UserProfile')}
          >
            <Icon
              name="person"
              size={25}
              color="#fff"
              style={styles.middleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="camera" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
