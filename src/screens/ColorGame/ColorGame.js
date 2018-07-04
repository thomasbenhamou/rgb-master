import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import RandomColor from '../../Components/RandomColor/RandomColor';
import MyColor from '../../Components/MyColor/MyColor';
import { connect } from 'react-redux';
import { resumeGame, pauseGame } from '../../store/actions/game';
import { createSoundClick, playSoundClick, createSoundWin } from '../../utility/sounds';

class ColorGame extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  whoosh = createSoundClick();

  state = {
    randomColor: {
      red: 0,
      green: 0,
      blue: 0
    },
    customColor: {
      red: 0,
      green: 0,
      blue: 0
    },
    score: 0,
    timeElapsed: 0,
    gameStarted: false
  };

  // scoped variables
  timerInterval = null;

  // utility functions
  getRandomInt = (min, max, fact) => {
    return Math.round((Math.random() * (max - min) + min) / fact) * fact;
  };

  // Listening to navigator events

  // lifecycle hooks
  componentWillUnmount = () => {
    // cancel all potentiel setStates to occur whereas component umounted ie causes memory leaks
    clearInterval(this.timerInterval);
    this.whoosh.release();
  };

  componentDidMount = () => {
    const { DeviceHeight, DeviceWidth } = Dimensions.get('window');
    this.props.navigator.screenIsCurrentlyVisible().then(visible => {
      if (visible) {
        this.props.navigator.showLightBox({
          screen: 'rgbMaster.IntroScreen',
          style: {
            backgroundBlur: 'dark',
            tapBackgroundToDismiss: true,
            width: DeviceWidth / 2,
            height: DeviceHeight / 2,
            adjustSoftInput: 'resize'
          },
          passProps: {
            onPress: () => this.props.navigator.dismissLightBox()
          }
        });
      }
    });
  };

  randomizeColor = () => {
    this.resetCustomColor();
    this.resetScore();
    this.resetTimer();
    const red = this.getRandomInt(0, 255, this.props.difficulty);
    const green = this.getRandomInt(0, 255, this.props.difficulty);
    const blue = this.getRandomInt(0, 255, this.props.difficulty);
    this.setState({
      randomColor: {
        red: red,
        green: green,
        blue: blue
      },
      gameStarted: true
    });
    this.props.onGameResumed();
  };

  resetCustomColor = () => {
    this.setState({
      customColor: {
        red: 0,
        green: 0,
        blue: 0
      }
    });
  };

  resetTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ timeElapsed: this.roundN(0, 2) }, this.startTimer(0));
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  // utility function
  roundN(num, n) {
    return parseFloat(Math.round(num * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      let newTime = Number(this.state.timeElapsed) + Number(0.1);
      this.setState({
        timeElapsed: this.roundN(newTime, 2)
      });
    }, 100);
  };

  resumeTimer = startingTime => {
    let start = startingTime;
    this.timerInterval = setInterval(() => {
      let newTime = Number(start) + Number(0.1);
      this.setState({ timeElapsed: this.roundN(newTime, 2) });
      start = this.roundN(newTime, 2);
    }, 100);
  };

  updateMyColor = (color, add) => {
    if (!this.state.gameStarted) {
      return;
    }
    playSoundClick(this.whoosh);
    let newColorValue;
    if (add) {
      newColorValue = +(this.state.customColor[color] + this.props.difficulty);
    } else {
      newColorValue = +(this.state.customColor[color] - this.props.difficulty);
    }
    if (newColorValue < 255 && newColorValue >= 0) {
      const customColor = { ...this.state.customColor, [color]: newColorValue };
      this.checkMatch(
        this.state.randomColor,
        customColor,
        this.state.score + 1,
        this.state.timeElapsed
      );
      this.setState({
        customColor: {
          ...this.state.customColor,
          [color]: newColorValue
        },
        score: this.state.score + 1
      });
    } else {
      return;
    }
  };

  checkMatch = (randomColor, customColor, score, time) => {
    if (!this.state.gameStarted) {
      return;
    }
    if (
      randomColor.red === customColor.red &&
      randomColor.green === customColor.green &&
      randomColor.blue === customColor.blue
    ) {
      this.props.navigator.pop({
        animated: false
      });
      this.props.navigator.push({
        screen: 'rgbMaster.WinnerScreen',
        passProps: {
          score: score,
          time: time,
          randomColor: randomColor
        },
        animated: false
      });
    } else {
      return;
    }
  };

  restartGame = () => {
    this.props.navigator.pop({ animated: false });
    this.props.navigator.push({ screen: 'rgbMaster.ColorGameScreen' });
  };

  backToMenu = () => {
    this.props.navigator.pop();
  };

  pauseGame = () => {
    if (!this.props.gamePaused || !this.state.gameStarted) {
      clearInterval(this.timerInterval);
      this.props.onGamePaused();
      this.props.navigator.showLightBox({
        screen: 'rgbMaster.PauseScreen',
        passProps: {
          resumeGame: () => this.pauseGame(),
          restartGame: () => this.restartGame(),
          backToMenu: () => this.backToMenu(),
          gameStarted: this.state.gameStarted
        },
        style: {
          backgroundBlur: 'dark'
        }
      });
    } else {
      this.resumeTimer(this.state.timeElapsed);
      this.props.onGameResumed();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.randomColor}>
          <RandomColor
            red={this.state.randomColor.red}
            green={this.state.randomColor.green}
            blue={this.state.randomColor.blue}
            onClickRandom={this.randomizeColor}
            score={this.state.score}
            time={this.state.timeElapsed}
            onClickPause={this.pauseGame}
            onStart={this.state.gameStarted}
          />
        </View>
        <View style={styles.myColor}>
          <MyColor
            red={this.state.customColor.red}
            green={this.state.customColor.green}
            blue={this.state.customColor.blue}
            onClickButton={this.updateMyColor}
            disabledControls={!this.state.gameStarted}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  randomColor: {
    flexBasis: '49%',
    width: '100%'
  },
  myColor: {
    flexBasis: '51%',
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    difficulty: state.difficulty,
    gamePaused: state.gamePaused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGamePaused: () => dispatch(pauseGame()),
    onGameResumed: () => dispatch(resumeGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorGame);
