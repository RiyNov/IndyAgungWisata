import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: '900',
  },
  icon: {
    height: 45,
    width: 45,
  },
});

export default styles;
