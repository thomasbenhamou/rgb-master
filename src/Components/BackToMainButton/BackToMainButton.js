import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const backToMainButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon name="ios-arrow-round-back" size={26} color="white" />
    <Text style={styles.text}>Back to main menu</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 5,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16,
    padding: 5,
    fontFamily: 'Orbitron'
  }
});

export default backToMainButton;
