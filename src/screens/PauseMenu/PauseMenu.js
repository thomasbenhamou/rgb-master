import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { resumeGame, backToMenu } from '../../store/actions/game';
import BackToMainButton from '../../Components/BackToMainButton/BackToMainButton';

class PauseMenu extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  closePauseMenu = () => {
    this.props.navigator.dismissLightBox();
    if (this.props.gameStarted) {
      this.props.onGameResumed();
      this.props.resumeGame();
    }
  };

  restartGame = () => {
    this.props.navigator.dismissLightBox();
    this.props.restartGame();
  };

  backToMenu = () => {
    this.props.navigator.dismissLightBox();
    this.props.backToMenu();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ color: 'green', fontSize: 32, fontFamily: 'Orbitron' }}>Game Paused</Text>
        </View>
        <TouchableOpacity onPress={this.restartGame}>
          <Text style={styles.button}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.closePauseMenu}>
          <Text style={styles.button}>Back to the game</Text>
        </TouchableOpacity>
        <View>
          <BackToMainButton onPress={this.backToMenu} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
  button: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Orbitron',
    padding: 30
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onGameResumed: () => dispatch(resumeGame()),
    onBackToMenu: () => dispatch(backToMenu())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PauseMenu);
