import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headerContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontSize: 16,
    color: '#008605',
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
  },
});

export default styles;
