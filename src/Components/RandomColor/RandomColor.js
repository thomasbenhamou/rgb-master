import React from 'react';
import { View, StyleSheet } from 'react-native';
import StartButton from '../StartButton/StartButton';
import Score from '../Score/Score';
import Time from '../Time/Time';
import PauseButton from '../PauseButton/PauseButton';

const randomColor = ({ red, green, blue, onClickRandom, score, time, onClickPause, onStart }) => {
  return (
    <View style={[{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }, styles.container]}>
      <View style={styles.topContainer}>
        <PauseButton onPress={onClickPause} />
        <View style={styles.scoreContainer}>
          <Score score={score} />
          <Time time={time} />
        </View>
      </View>
      {onStart ? null : <StartButton onPress={onClickRandom} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  scoreContainer: {
    width: '50%',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    marginTop: 20
  },
  buttonContainer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default randomColor;
