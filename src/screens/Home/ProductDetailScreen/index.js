import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ProductDetail from './components/ProductDetail';

import styles from './styles';

//From BE
const data = [
  {
    month: 'September',
    totalSeat: '',
  },
  {
    month: 'Oktober',
    totalSeat: '',
  },
  {
    month: 'November',
    totalSeat: '',
  },
  {
    month: 'December',
    totalSeat: '',
  },
  {
    month: 'January',
    totalSeat: '',
  },
  {
    month: 'February',
    totalSeat: '',
  },
  {
    month: 'March',
    totalSeat: '',
  },
  {
    month: 'April',
    totalSeat: '',
  },
  {
    month: 'May',
    totalSeat: '',
  },
  {
    month: 'June',
    totalSeat: '',
  },
  {
    month: 'July',
    totalSeat: '',
  },
  {
    month: 'August',
    totalSeat: '',
  },
];

export default class ProductDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProductDetail data={data} />
      </View>
    );
  }
}
