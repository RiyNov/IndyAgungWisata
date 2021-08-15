import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexGrow: 1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  titleContainer: {},
  iconContainer: {
    position: 'absolute',
    top: -1,
    left: 0,
  },
  subHeaderContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#008605',
  },
});

export default styles;
