import { StyleSheet } from 'react-native';
import { RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5 * RatioW,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10 * RatioW,
    height: 42 * RatioW,
    paddingLeft: 15 * RatioW,
    paddingRight: 15 * RatioW,
  },
  textStyle: {
    flex: 1,
    fontSize: 13 * RatioW,
  },
  stick: {
    width: 1 * RatioW,
    height: 32 * RatioW,
    backgroundColor: '#f3f6f9',
    marginRight: 5 * RatioW,
  },
});

export default styles;
