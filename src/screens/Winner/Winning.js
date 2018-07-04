import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import ShareScoreButton from '../../Components/ShareScoreButton/ShareScoreButton';
import PlayerNameInput from '../../Components/PlayerNameInput/PlayerNameInput';
import { connect } from 'react-redux';
import { submitScore } from '../../store/actions/game';
import AnimatedTitle from '../../Components/AnimatedTitle/AnimatedTitle';
import Sound from 'react-native-sound';
import BackToMainButton from '../../Components/BackToMainButton/BackToMainButton';

class Winning extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      playerName: 'Enter your name...'
    };
  }

  // lifecyclehooks
  componentDidMount = () => {
    let whoosh = new Sound('rgb_master_you_win.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('sound load failed');
        return;
      }
      console.log('sound loaded');
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
          // reset the player to its uninitialized state (android only)
          // this is the only option to recover after an error occured and use the player again
          whoosh.reset();
        }
      });
    });
  };

  componentDidUpdate = () => {
    if (this.props.submitSuccess) {
      this.props.navigator.resetTo({ screen: 'rgbMaster.TopScoresScreen' });
    }
  };

  // methods
  publishScore = () => {
    if (this.state.playerName === '') {
      this.props.onSubmitScore(
        'The Unnamed Player',
        this.props.score,
        this.props.time,
        this.props.difficulty
      );
    } else {
      this.props.onSubmitScore(
        this.state.playerName,
        this.props.score,
        this.props.time,
        this.props.difficulty
      );
    }
  };

  handlePlayerNameInput = playerName => {
    this.setState({
      playerName: playerName
    });
  };

  onInputFocus = () => {
    this.setState({
      playerName: '',
      moveContainerUp: true
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titlesContainer}>
          <AnimatedTitle />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Your score: {this.props.score}</Text>
          <Text style={styles.infoText}>Your time: {this.props.time}</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.infoText}>Your color: </Text>
          </View>
          <View style={styles.colorInfoContainer}>
            <View style={styles.colorContainer}>
              <Text style={styles.infoText}>Red:</Text>
              <Text style={styles.infoText}> {this.props.randomColor.red}</Text>
            </View>
            <View style={styles.colorContainer}>
              <Text style={styles.infoText}>Green:</Text>
              <Text style={styles.infoText}> {this.props.randomColor.green}</Text>
            </View>
            <View style={styles.colorContainer}>
              <Text style={styles.infoText}>Blue:</Text>
              <Text style={styles.infoText}> {this.props.randomColor.blue}</Text>
            </View>
          </View>
          <PlayerNameInput
            playerName={this.state.playerName}
            onChangeText={playerName => this.handlePlayerNameInput(playerName)}
            onFocus={this.onInputFocus}
          />
          <ShareScoreButton onPress={this.publishScore} />
          <View style={{ marginTop: 20 }}>
            <BackToMainButton onPress={() => this.props.navigator.pop()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titlesContainer: {
    margin: 40
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Orbitron'
  },
  colorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  },
  colorContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    difficulty: state.difficulty,
    submitSuccess: state.submitSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitScore: (playerName, score, time, difficulty) =>
      dispatch(submitScore(playerName, score, time, difficulty))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Winning);
