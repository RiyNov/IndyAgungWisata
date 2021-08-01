import React, {Component} from 'react';
import {View} from 'react-native';
import News from './components/News';
import ProductsList from './components/ProductsList';
import SearchInputBar from './components/SearchInputBar';
import Separator from './components/Separator';

import styles from './styles';

//From BE
const data = [
  {
    name: 'Umroh Regular',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_regular.jpg'),
  },
  {
    name: 'Umroh Plus Turkey',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_plus_turkey.jpg'),
  },
  {
    name: 'Umroh Plus Dubai',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_plus_dubai.jpg'),
  },
  {
    name: 'Umroh Plus Abu Dhabi',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_plus_abu_dhabi.jpg'),
  },
  {
    name: 'Umroh Plus Cairo',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_plus_cairo.jpg'),
  },
  {
    name: 'Umroh Plus Aqsa',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_plus_aqsa.jpg'),
  },
  {
    name: 'Umroh Ramadhan',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_ramadhan.jpg'),
  },
  {
    name: 'Umroh VIP',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/umrah_vip.jpg'),
  },
  {
    name: 'Mono Turkey',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/mono_turkey.jpg'),
  },
  {
    name: 'Wisata Halal',
    price: '00,0 jt',
    imagePath: require('../../../assets/images/wisata_halal.jpg'),
  },
];

class ProductListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchInputBar />
        <News />
        <Separator />
        <ProductsList productList={data} />
      </View>
    );
  }
}

export default ProductListScreen;
