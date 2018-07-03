import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow';

const menuButton = ({ title, onPress, fontSize, playButton }) => (
  <TouchableOpacity style={playButton ? styles.playButton : styles.button} onPress={onPress}>
    {playButton ? <AnimatedArrow left green /> : null}
    <Text style={[styles.text, { fontSize: fontSize }]}>{title}</Text>
    {playButton ? <AnimatedArrow green /> : null}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  playButton: {
    borderRadius: 30,
    width: '70%',
    backgroundColor: 'black',
    height: 90,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    borderRadius: 30,
    width: '70%',
    backgroundColor: 'black',
    height: 90,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'green',
    fontFamily: 'Orbitron'
  }
});

export default menuButton;
