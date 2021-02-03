import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import { SvgIcon, CustomImage } from '@components';
import { Images } from '@assets';
import styles from './styles';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SideGroup>
        <View style={styles.avatarContainer}>
          <CustomImage
            image={Images.avatar_sandor}
            width={25}
            height={25}
            style={{ resizeMode: 'cover' }}
          />
          <SvgIcon shape={'GROUP'} color={'#0d3750'} style={styles.badgeStyle} />
        </View>
        <SvgIcon shape={'CALENDAR_ADD'} color={'#0d3750'} style={styles.buttonStyle} />
      </SideGroup>
      <CenterGroup>
        <CustomImage image={Images.cyber_educators} width={105} height={52} />
      </CenterGroup>
      <SideGroup>
        <SvgIcon shape={'CHAT'} color={'#0d3750'} style={styles.buttonStyle} />
        <SvgIcon shape={'NOTIFICATION'} color={'#0d3750'} style={styles.buttonStyle} />
      </SideGroup>
    </View>
  );
};

export default CustomHeader;

const SideGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CenterGroup = styled.View`
  flex-direction: column;
  align-items: center;
`;
