import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

export default function Product({productName, productPrice, imagePath}) {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={imagePath} />
      <View style={styles.productDetailContainer}>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{productName}</Text>
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productDetailText}>{'Start\nfrom'}</Text>
          <Text style={styles.productPrice}>{productPrice}</Text>
          <Image style={styles.arrowIcon} />
        </View>
      </View>
    </View>
  );
}
