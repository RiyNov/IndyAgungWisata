import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
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
    marginLeft: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: '900',
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
  iconContainer: {},
  icon: {
    height: 20,
    width: 20,
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  middleIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 30,
  },
});

export default styles;
