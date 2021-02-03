import { StyleSheet } from 'react-native';
import { RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
    height: 90,
    borderRadius: 10,
  },
  mainContainer: {
    paddingTop: 10 * RatioW,
    paddingBottom: 50 * RatioW,
    paddingLeft: 10 * RatioW,
    paddingRight: 10 * RatioW,
  },
});

export default styles;
