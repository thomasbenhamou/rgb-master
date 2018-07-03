import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoundButton from '../RoundButton/RoundButton';

const colorControl = ({ onPress, color }) => (
  <View style={styles.control}>
    <RoundButton plus onPress={onPress} color={color} />
    <RoundButton onPress={onPress} color={color} />
  </View>
);

const styles = StyleSheet.create({
  control: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default colorControl;
