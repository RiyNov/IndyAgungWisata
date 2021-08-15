import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// Import vector icons
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function MonthDetailScreen({route, navigation}) {
  const {monthName} = route.params;

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-sharp" size={30} color="#008605" />
            </TouchableOpacity>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.title}>{monthName}</Text>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
