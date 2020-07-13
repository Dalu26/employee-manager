import React from 'react';
import {View} from 'react-native';
const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};
const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
    // backgroundColor: '#1a1a1a',
  },
};
export {CardSection};
