import React from 'react';
import { View } from 'react-native';
import { ImgLoader, CustomText, SvgIcon } from '@components';
import { getImageSource, getCreatedTime, RatioW } from '@utils';
import styles from './styles';

const ArticleItem = (props) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImgLoader image={getImageSource(item.manager.image)} width={32} height={32} />
        <View style={styles.headerInfo}>
          <CustomText text={item.manager.full_name} size={14} color={'#153664'} style = {styles.nameStyle} />
          <CustomText text={getCreatedTime(item.created)} size={10} color={'#8fa1bc'} />
        </View>
      </View>
      <ImgLoader image={getImageSource(item.image)} height={135} />
      <View style={styles.infoContainer}>
        <CustomText text={`${item.rating_count} LIKES`} size={9} color={'#a1a1a1'} />
        <CustomText text={`${item.comments_count} COMMENTS`} size={9} color={'#a1a1a1'} />
      </View>
      <View style={styles.divider} />
      <View style={styles.actionContainer}>
        <View style={styles.actionItem}>
          <SvgIcon shape={'RATE'} color={'#a9a9a9'} />
          <CustomText
            text={'RATE'}
            size={10}
            color={'#a1a1a1'}
            style={{ paddingLeft: 5 * RatioW }}
          />
        </View>
        <View style={styles.actionItem}>
          <SvgIcon shape={'COMMENTS'} color={'#a9a9a9'} />
          <CustomText
            text={'COMMENTS'}
            size={10}
            color={'#a1a1a1'}
            style={{ paddingLeft: 5 * RatioW }}
          />
        </View>
      </View>
    </View>
  );
};

export default ArticleItem;
