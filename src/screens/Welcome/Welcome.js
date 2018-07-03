import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import MenuButton from '../../Components/MenuButton/MenuButton';
import landingPage from '../../assets/landingPage.png';

class Welcome extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  openGame = () => {
    this.props.navigator.push({
      screen: 'rgbMaster.ColorGameScreen'
    });
  };

  openScores = () => {
    this.props.navigator.push({
      screen: 'rgbMaster.TopScoresScreen'
    });
  };

  openSettings = () => {
    this.props.navigator.push({
      screen: 'rgbMaster.SettingsScreen'
    });
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={landingPage}>
        <MenuButton onPress={this.openGame} title="Play" fontSize={42} playButton />
        <MenuButton onPress={this.openScores} title="Top Scores" fontSize={24} />
        <MenuButton onPress={this.openSettings} title="Settings" fontSize={24} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
export default Welcome;
