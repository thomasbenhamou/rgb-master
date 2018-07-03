import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ColorGame from './src/screens/ColorGame/ColorGame';
import TopScores from './src/screens/TopScores/TopScores';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Settings from './src/screens/Settings/Settings';
import Welcome from './src/screens/Welcome/Welcome';
import PauseMenu from './src/screens/PauseMenu/PauseMenu';
import Winning from './src/screens/Winner/Winning';
import IntroScreen from './src/screens/IntroScreen/IntroScreen';

// getting the store
const store = configureStore();

// Registering the screens

Navigation.registerComponent('rgbMaster.ColorGameScreen', () => ColorGame, store, Provider);
Navigation.registerComponent('rgbMaster.TopScoresScreen', () => TopScores, store, Provider);
Navigation.registerComponent('rgbMaster.SettingsScreen', () => Settings, store, Provider);
Navigation.registerComponent('rgbMaster.WelcomeScreen', () => Welcome);
Navigation.registerComponent('rgbMaster.PauseScreen', () => PauseMenu, store, Provider);
Navigation.registerComponent('rgbMaster.WinnerScreen', () => Winning, store, Provider);
Navigation.registerComponent('rgbMaster.IntroScreen', () => IntroScreen);

// Start the app
export default () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'rgbMaster.WelcomeScreen'
    }
  });
