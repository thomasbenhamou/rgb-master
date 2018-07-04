import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DifficultyChoser from '../../Components/DifficultyChoser/DifficultyChoser';
import BackToMainButton from '../../Components/BackToMainButton/BackToMainButton';

class Settings extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <BackToMainButton onPress={() => this.props.navigator.pop()} />
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Orbitron' }}>
            Choose the difficulty level (default: 1 sword)
          </Text>
          <View style={styles.swordsContainer}>
            <DifficultyChoser />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  titleContainer: {
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: 'green'
  },
  title: {
    color: 'green',
    fontSize: 28,
    fontFamily: 'Orbitron',
    textAlign: 'center',
    paddingTop: 10
  },
  contentContainer: {
    marginTop: 20,
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  swordsContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  }
});

export default Settings;
