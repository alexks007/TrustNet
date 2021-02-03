import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { CustomText } from '@components';
import { RatioW } from '@utils';
import styles from './styles';

const filterArray = [
  { id: 1, name: 'Articles', selected: false },
  { id: 2, name: 'Polls', selected: false },
  { id: 3, name: 'Posts', selected: false },
  { id: 4, name: 'Events', selected: false },
  { id: 5, name: 'Article video', selected: false },
  { id: 6, name: 'Data files', selected: false },
];

const FilterDropDown = () => {
  const [checkedArray, setCheckedArray] = useState([]);

  useEffect(() => {
    setCheckedArray(filterArray);
  }, []);

  const handleAll = () => {
    setCheckedArray([
      { id: 1, name: 'Articles', selected: true },
      { id: 2, name: 'Polls', selected: true },
      { id: 3, name: 'Posts', selected: true },
      { id: 4, name: 'Events', selected: true },
      { id: 5, name: 'Article video', selected: true },
      { id: 6, name: 'Data files', selected: true },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <CustomText text={'Filters'} size={16} color={'#0a2138'} />
        <CustomText text={'Select all'} size={14} color={'#8fa1bc'} onPress={handleAll} />
      </View>
      {checkedArray.map((item, index) => (
        <View key={item.id} style={{ paddingTop: 5 * RatioW }}>
          <CheckBox
            onClick={() => {
              setCheckedArray(
                checkedArray.map((tempItem, tempIndex) => {
                  var temp = Object.assign({}, tempItem);
                  if (index === tempIndex) {
                    temp.selected = !tempItem.selected;
                  }
                  return temp;
                }),
              );
            }}
            isChecked={item.selected}
            rightText={item.name}
            checkBoxColor={'#dee2eb'}
            checkedCheckBoxColor={'#3ebad3'}
            uncheckedCheckBoxColor={'#bfc4cf'}
          />
          <View style={styles.divider} />
        </View>
      ))}
    </View>
  );
};

export default FilterDropDown;
