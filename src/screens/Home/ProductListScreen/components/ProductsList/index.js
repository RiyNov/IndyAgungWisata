import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setHeaderTitle} from '../../../../../redux';
import Product from '../Product';

import styles from './styles';

export default function ProductsList({navigation, productList}) {
  const dispatch = useDispatch();

  const onItemPressed = title => {
    dispatch(setHeaderTitle(title));
    navigation.navigate('ProductDetailScreen');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={({name}) => name}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onItemPressed(item.name)}>
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
