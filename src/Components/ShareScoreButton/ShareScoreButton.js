import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const shareScoreButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Publish your score</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'green',
    fontSize: 34,
    fontFamily: 'Orbitron',
    textAlign: 'center',
    padding: 5
  }
});

export default shareScoreButton;
