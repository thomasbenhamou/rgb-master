import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import greenSword from '../../assets/greenSword.png';

const scoreListItem = ({ score, rank }) => {
  let level = 'easy';
  if (score.item.difficulty === 5) {
    level = 'hard';
  }
  if (score.item.difficulty === 1) {
    level = 'extreme';
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={rank === 1 ? styles.greenText : styles.whiteText}>{rank}</Text>
      </View>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <Text style={rank === 1 ? styles.firstPlayer : styles.playerName}>
          {score.item.playerName}
        </Text>
        {rank === 1 ? <Image source={greenSword} style={styles.sword} resizeMode="cover" /> : null}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={rank === 1 ? styles.greenText : styles.whiteText}>{score.item.time}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={rank === 1 ? styles.greenText : styles.whiteText}>{score.item.score}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={rank === 1 ? styles.greenText : styles.whiteText}>{level}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  playerName: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left'
  },
  whiteText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  greenText: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center'
  },
  firstPlayer: {
    color: 'green',
    fontSize: 20,
    textAlign: 'left'
  },
  sword: {
    height: 20,
    width: 20
  }
});

export default scoreListItem;
