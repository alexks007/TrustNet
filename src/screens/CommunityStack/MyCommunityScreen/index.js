import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import styles from './styles';

const MyCommunityScreen = () => {
  const rnd = (max = 256) => Math.random() * max;
  const generateColor = () => `rgb(${rnd()},${rnd()},${rnd()})`;

  const colors = useMemo(() => [...new Array(20)].map(() => generateColor()), []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={colors}
        renderItem={({ item: color }) => (
          <View
            style={[
              styles.item,
              {
                backgroundColor: color,
              },
            ]}
          />
        )}
        keyExtractor={(item, idx) => `item_${idx}`}
      />
    </SafeAreaView>
  );
};

export default MyCommunityScreen;
