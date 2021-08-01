import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  subContainer: {
    margin: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#adadad',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    padding: 15,
    fontSize: 14,
    color: '#b3b3b3',
  },
  itemGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  icon: {
    height: 25,
    width: 25,
  },
  middleIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
});

export default styles;
