import React from 'react';
import { Text, View } from 'react-native';
import { Title } from '../text';
import * as globalStyles from '../../styles/global';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Title style={globalStyles.COMMON_STYLES.text}>
        {props.headerText}
      </Title>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: globalStyles.BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
