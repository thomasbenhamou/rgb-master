import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RedSword from '../../assets/redSword.png';
import GreenSword from '../../assets/greenSword.png';
import BlueSword from '../../assets/blueSword.png';

class IntroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swordsContainer}>
          <Image source={RedSword} />
          <Image source={GreenSword} />
          <Image source={BlueSword} />
        </View>
        <View style={styles.title}>
          <Text style={{ color: 'green', fontSize: 20, fontFamily: 'Orbitron' }}>Welcome,</Text>
        </View>
        <View style={styles.title}>
          <Text style={{ color: 'green', fontSize: 18, fontFamily: 'Orbitron' }}>
            apprentice master of RGB colors
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Orbitron' }}>
            Your objective is to find the color by changing the value of Red, Green and Blue.
          </Text>
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Orbitron', paddingTop: 30 }}>
            Click on Start to begin
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.okButton}>
            <Text style={styles.okButtonText}>Ok, got it</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 10,
    alignSelf: 'center'
  },
  title: {
    padding: 10,
    flexWrap: 'wrap'
  },
  text: {
    padding: 10
  },
  swordsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  okButton: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    width: '50%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  okButtonText: {
    color: 'white',
    padding: 5,
    fontFamily: 'Orbitron',
    fontSize: 16
  }
});

export default IntroScreen;
