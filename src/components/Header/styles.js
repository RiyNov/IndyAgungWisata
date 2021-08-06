import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 63,
    backgroundColor: '#3a5e8e',
    paddingHorizontal: 20,
    // paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    textAlign: 'center',
  },
  itemGroup: {
    flexGrow: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: 250,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  inputText: {
    fontSize: 18,
    color: 'white',
  },
  burgerMenu: {
    marginLeft: -6,
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  middleIcon: {
    marginHorizontal: 20,
  },
});

export default styles;
