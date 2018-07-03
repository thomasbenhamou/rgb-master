import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ColorControl from '../ColorControl/ColorControl';
import redSword from '../../assets/redSword.png';
import greenSword from '../../assets/greenSword.png';
import blueSword from '../../assets/blueSword.png';

const myColor = ({ red, green, blue, onClickButton }) => (
  <View style={[{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }, styles.container]}>
    <View style={styles.infosContainer}>
      <View style={styles.displayControl}>
        <Image source={redSword} style={styles.swordImage} resizeMode="contain" />
        <Text style={{ color: 'white' }}> {red}</Text>
      </View>
      <View style={styles.displayControl}>
        <Image source={greenSword} style={styles.swordImage} resizeMode="contain" />
        <Text style={{ color: 'white' }}> {green}</Text>
      </View>
      <View style={styles.displayControl}>
        <Image source={blueSword} style={styles.swordImage} resizeMode="contain" />
        <Text style={{ color: 'white' }}> {blue}</Text>
      </View>
    </View>
    <View style={styles.controlsContainer}>
      <ColorControl onPress={onClickButton} color="red" />
      <ColorControl onPress={onClickButton} color="green" />
      <ColorControl onPress={onClickButton} color="blue" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  infosContainer: {
    backgroundColor: '#070200',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flex: 3
  },
  displayControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  swordImage: {
    height: 40,
    width: 40
  },
  controlsContainer: {
    flex: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default myColor;
