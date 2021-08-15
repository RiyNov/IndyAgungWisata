import React, {Component} from 'react';
import {View} from 'react-native';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          <ProductDetail data={data} navigation={this.props.navigation} />
        </View>
        <Footer navigation={this.props.navigation} footerText="ITINERARY" />
      </View>
    );
  }
}
