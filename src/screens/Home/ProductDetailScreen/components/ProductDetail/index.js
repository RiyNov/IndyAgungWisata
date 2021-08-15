import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ProductDetailItem from '../ProductDetailItem';

import styles from './styles';

export default function ProductDetail({data, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Departure Date</Text>
        <Text style={styles.headerText}>Total Seat Number</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={({month}) => month}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MonthDetailScreen', {monthName: item.month})
            }>
            <ProductDetailItem month={item.month} totalSeat={item.totalSeat} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
