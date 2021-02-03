import { StyleSheet } from 'react-native';
import { RatioW } from '@utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 10 * RatioW,
    borderTopLeftRadius: 10 * RatioW,
    borderBottomRightRadius: 10 * RatioW,
    borderBottomLeftRadius: 10 * RatioW,
    paddingTop: 10 * RatioW,
    paddingBottom: 10 * RatioW,
    marginTop: 10 * RatioW,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15 * RatioW,
    paddingRight: 15 * RatioW,
    marginBottom: 5
  },
  headerInfo: {
    paddingLeft: 10 * RatioW,
    alignItems: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15 * RatioW,
    paddingRight: 15 * RatioW,
    paddingTop: 10 * RatioW,
    paddingBottom: 10 * RatioW,
  },
  divider: {
    backgroundColor: '#a1a1a1',
    height: 1 * RatioW,
    width: '90 %',
    alignSelf: 'center',
    opacity: 0.5,
  },
  actionContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 45 * RatioW,
    paddingRight: 45 * RatioW,
    paddingTop: 10 * RatioW,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    // fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#153664",
    textAlign: "left"
  },
  descriptionStyle: {
    fontSize: 12,
    color: "#153664",
    textAlign: "left"
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

export default styles;
