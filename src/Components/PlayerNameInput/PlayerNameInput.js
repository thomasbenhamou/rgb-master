import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const playerNameInput = ({ playerName, onChangeText, onFocus }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={playerName}
      onChangeText={onChangeText}
      onFocus={onFocus}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 20,
    borderWidth: 1,
    borderColor: 'green'
  },
  input: {
    color: 'green',
    fontSize: 30,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default playerNameInput;
