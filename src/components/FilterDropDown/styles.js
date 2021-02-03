import { StyleSheet } from 'react-native';
import { RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 5 * RatioW,
    marginBottom: 5 * RatioW,
    paddingTop: 14 * RatioW,
    paddingLeft: 20 * RatioW,
    paddingRight: 20 * RatioW,
    paddingBottom: 15 * RatioW,
    backgroundColor: '#ffffff',
    borderRadius: 10 * RatioW,
    alignSelf: 'flex-end',
    // position: 'absolute',
    // top: 100,
    // elevation: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1 * RatioW,
    borderColor: '#8fa1bc',
    paddingTop: 5 * RatioW,
    paddingBottom: 5 * RatioW,
  },
  divider: {
    width: '100%',
    height: 1 * RatioW,
    backgroundColor: '#f3f6f9',
    marginTop: 3 * RatioW,
    marginBottom: 3 * RatioW,
  },
});

export default styles;
