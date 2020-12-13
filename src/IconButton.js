import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

// Creating the button that contains the icon for like, dislike, and favorite.
const IconButton = ({onPress, add, backgroundColor, color}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.75}>
    <Icon name={add} size={25} color={color} />
  </TouchableOpacity>
);

// Declaring the property types of the button
IconButton.propTypes = {
  onPress: func.isRequired,
  add: string.isRequired,
  color: string,
  backgroundColor: string,
};

IconButton.defaultProps = {
  color: '#fff',
  backgroundColor: '#ff3737',
};

// Style of the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 15,
    padding: 20,
  },
});

export default IconButton;
