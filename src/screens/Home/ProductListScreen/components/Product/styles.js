import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  productDetailContainer: {
    marginLeft: 20,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  productNameContainer: {
    alignSelf: 'center',
  },
  productDetails: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  productImage: {
    marginVertical: 3,
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  productName: {
    fontSize: 16,
    color: '#008605',
    fontWeight: '500',
  },
  productDetailText: {
    fontSize: 12,
    color: '#CDCDCD',
  },
  productPrice: {
    marginHorizontal: 15,
    alignSelf: 'center',
    fontSize: 15,
    color: '#FF0316',
    fontWeight: '500',
  },
  arrowIcon: {
    alignSelf: 'center',
    backgroundColor: 'red',
    height: 15,
    width: 15,
  },
});

export default styles;
