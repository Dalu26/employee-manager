import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Kanit',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#330252',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#330252',
    marginLeft: 5,
    marginRight: 5,
  },
};
export {Button};
