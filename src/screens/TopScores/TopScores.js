import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchScores } from '../../store/actions/game';
import ScoreListItem from '../../Components/ScoreListItem/ScoreListItem';
import BackToMainButton from '../../Components/BackToMainButton/BackToMainButton';

class TopScores extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  componentDidMount = () => {
    this.props.onFetchScores();
  };

  renderItem = (score, index) => {
    return <ScoreListItem score={score} rank={Number(score.index) + 1} />;
  };

  backToMenu = () => {
    this.props.navigator.resetTo({ screen: 'rgbMaster.WelcomeScreen' });
  };

  render() {
    let scores = <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text>;
    if (this.props.scores) {
      scores = (
        <FlatList
          data={this.props.scores}
          renderItem={(score, index) => this.renderItem(score, index)}
        />
      );

      // use the android version, switching between screens is not great...
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <BackToMainButton onPress={this.backToMenu} />
          <Text style={styles.title}>TopScores</Text>
        </View>
        <View style={styles.scoresContainer}>
          <View style={styles.scoresHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.whiteText}>Rank</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={styles.playerName}>Player</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.whiteText}>Time</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.whiteText}>Score</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.whiteText}>Lvl</Text>
            </View>
          </View>
          {scores}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  scoresContainer: {
    marginTop: 20,
    flex: 1,
    width: '100%'
  },
  scoresHeader: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  playerName: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left'
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    scores: state.scores
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchScores: () => dispatch(fetchScores())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopScores);
