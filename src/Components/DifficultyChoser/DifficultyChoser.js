import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import redSword from '../../assets/redSword.png';
import graySword from '../../assets/graySword.png';
import { connect } from 'react-redux';
import { changeDifficulty } from '../../store/actions/game';

class DifficultyChoser extends Component {
  changeDifficulty = () => {
    switch (this.props.difficulty) {
      case 10:
        this.props.onChangeDifficulty(5);
        break;
      case 5:
        this.props.onChangeDifficulty(1);
        break;
      case 1:
        this.props.onChangeDifficulty(10);
        break;
      default:
        return;
    }
  };
  render() {
    let swords;
    let explanation;
    if (this.props.difficulty === 5) {
      swords = (
        <View style={styles.swords}>
          <Image source={redSword} />
          <Image source={redSword} />
          <Image source={graySword} />
        </View>
      );
      explanation = 'RGB colors are mutiples of 5. Steps are 5.';
    }
    if (this.props.difficulty === 1) {
      swords = (
        <View style={styles.swords}>
          <Image source={redSword} />
          <Image source={redSword} />
          <Image source={redSword} />
        </View>
      );
      explanation = 'RGB colors are mutiples of 1. Steps are 1.';
    }
    if (this.props.difficulty === 10) {
      swords = (
        <View style={styles.swords}>
          <Image source={redSword} />
          <Image source={graySword} />
          <Image source={graySword} />
        </View>
      );
      explanation = 'RGB colors are mutiples of 10. Steps are 10.';
    }
    return (
      <TouchableOpacity onPress={this.changeDifficulty} style={styles.swordsContainer}>
        {swords}
        <View style={styles.explanation}>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Orbitron' }}>
            {explanation}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  swordsContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  swords: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  explanation: {
    margin: 30
  }
});

mapStateToProps = state => {
  return {
    difficulty: state.difficulty
  };
};

mapDispatchToProps = dispatch => {
  return {
    onChangeDifficulty: newLevel => dispatch(changeDifficulty(newLevel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifficultyChoser);
