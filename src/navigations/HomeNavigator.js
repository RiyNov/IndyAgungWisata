import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductDetailScreen from '../screens/Home/ProductDetailScreen';
import ProductListScreen from '../screens/Home/ProductListScreen';

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: 'black',
        activeBackgroundColor: 'white',
        labelStyle: {
          fontSize: 16,
          color: '#008605',
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen name="Home" component={ProductListScreen} />
      <Drawer.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
      />
    </Drawer.Navigator>
  );
}
