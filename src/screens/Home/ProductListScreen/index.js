import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import {setHeaderTitle} from '../../../redux';
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

// class ProductListScreen extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Header
//           navigation={this.props.navigation}
//           title={'INDY\nAGUNG\nWISATA'}
//         />
//         <View style={styles.container}>
//           <SearchInputBar />
//           <News />
//           <Separator />
//           <ProductsList navigation={this.props.navigation} productList={data} />
//         </View>
//         <Footer />
//       </View>
//     );
//   }
// }

// export default ProductListScreen;

export default function ProductListScreen({navigation}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      dispatch(setHeaderTitle('INDY\nAGUNG\nWISATA'));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <SearchInputBar />
        <News />
        <Separator />
        <ProductsList navigation={navigation} productList={data} />
      </View>
      <Footer />
    </View>
  );
}
