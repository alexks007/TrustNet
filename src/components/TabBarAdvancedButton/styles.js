import { StyleSheet } from 'react-native';
import { RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 70 * RatioW,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -25 * RatioW,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50 * RatioW,
    height: 50 * RatioW,
    borderRadius: 25 * RatioW,
  },
  buttonIcon: {
    width: 96 * RatioW,
    height: 96 * RatioW,
    resizeMode: 'stretch',
  },
});

export default styles;
