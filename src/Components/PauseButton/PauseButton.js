import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const pauseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
    <Icon name="ios-pause" size={40} color="#2AB858" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: '50%',
    height: 60,
    paddingLeft: 20,
    marginTop: 30
  }
});

export default pauseButton;
