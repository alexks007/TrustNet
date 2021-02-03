import { StyleSheet, Platform } from 'react-native';
import { width, RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10 * RatioW,
    paddingRight: 10 * RatioW,
    paddingTop: Platform.OS === 'ios' ? 40 * RatioW : 10 * RatioW,
    paddingBottom: 15 * RatioW,
  },
  avatarContainer: {
    width: 34 * RatioW,
    height: 34 * RatioW,
    borderRadius: 17 * RatioW,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0d3750',
    borderWidth: 3 * RatioW,
    marginRight: 10 * RatioW,
  },
  buttonStyle: {
    paddingLeft: 10 * RatioW,
    paddingRight: 10 * RatioW,
    paddingTop: 5 * RatioW,
    paddingBottom: 5 * RatioW,
  },
  badgeStyle: {
    padding: 5 * RatioW,
    position: 'absolute',
    bottom: -10 * RatioW,
    right: -12 * RatioW,
  },
});

export default styles;
