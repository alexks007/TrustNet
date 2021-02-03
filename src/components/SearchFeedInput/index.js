import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SvgIcon } from '@components';
import styles from './styles';

const SearchFeedInput = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleFilter = () => {
    props.showFilter(!isClicked);
    setIsClicked(!isClicked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <SvgIcon shape={'SEARCH'} color={'#3ebad3'} />
        <TextInput
          style={styles.textStyle}
          placeholder="Search post / member / event..."
          underlineColorAndroid="transparent"
        />
        <View style={styles.stick} />
        <SvgIcon
          shape={'FILTER'}
          color={isClicked ? '#3ebad3' : '#8fa1bc'}
          onPress={handleFilter}
        />
      </View>
    </View>
  );
};

export default SearchFeedInput;
