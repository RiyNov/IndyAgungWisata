import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Product from '../Product';

import styles from './styles';

export default function ProductsList({productList}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={({name}) => name}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Product
              productName={item.name}
              productPrice={item.price}
              imagePath={item.imagePath}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
