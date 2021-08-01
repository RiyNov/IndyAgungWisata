import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Product from '../Product';

import styles from './styles';

const data = [
  {
    name: 'Umroh Regular',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Plus Turkey',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Plus Dubai',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Plus Abu Dhabi',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Plus Cairo',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Plus Aqsa',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh Ramadhan',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Umroh VIP',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Mono Turkey',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
  {
    name: 'Wisata Halal',
    price: '00,0 jt',
    // imagePath: require('../../../../assets/images/umroh_regular.png'),
  },
];

export default function ProductsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({name}) => name}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Product productName={item.name} productPrice={item.price} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
