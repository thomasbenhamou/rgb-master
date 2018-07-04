import {
  SAVE_SCORES,
  CHANGE_DIFFICULTY,
  RESUME_GAME,
  PAUSE_GAME,
  SUBMIT_SCORE,
  SCORE_SUBMITTED,
  FETCH_SCORES,
  SET_SCORES
} from './actionTypes';
import { sortPlayers } from '../../utility/utility';

export const saveScore = (score, time) => {
  return {
    type: SAVE_SCORES,
    score: score,
    time: time
  };
};

export const changeDifficulty = newLevel => {
  return {
    type: CHANGE_DIFFICULTY,
    newLevel: newLevel
  };
};

export const resumeGame = () => {
  return {
    type: RESUME_GAME
  };
};

export const pauseGame = () => {
  return {
    type: PAUSE_GAME
  };
};

export const submitScore = (playerName, score, time, difficulty) => {
  const scoreToSave = {
    playerName: playerName,
    score: score,
    time: time,
    difficulty: difficulty
  };
  return dispatch => {
    fetch('https://rgb-master-game.firebaseio.com/scores.json', {
      method: 'POST',
      body: JSON.stringify(scoreToSave)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(parsedRes => {
        dispatch(scoreSubmitted());
      })
      .catch(err => {
        alert('Your score has not been submitted, please try again');
      });
  };
};

export const scoreSubmitted = () => {
  return {
    type: SCORE_SUBMITTED,
    submitSuccess: true
  };
};

export const fetchScores = () => {
  return dispatch => {
    fetch('https://rgb-master-game.firebaseio.com/scores.json?orderBy="score"&limitToFirst=50')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(parsedRes => {
        let scores = [];
        for (let key in parsedRes) {
          scores.push({
            key: key,
            playerName: parsedRes[key].playerName,
            score: parsedRes[key].score,
            time: parsedRes[key].time,
            difficulty: parsedRes[key].difficulty
          });
        }
        const scoresEasy = scores.filter(item => item.difficulty === 10);
        const scoresHard = scores.filter(item => item.difficulty === 5);
        const scoresExtreme = scores.filter(item => item.difficulty === 1);
        scoresEasy.sort((a, b) => sortPlayers(a, b));
        scoresHard.sort((a, b) => sortPlayers(a, b));
        scoresExtreme.sort((a, b) => sortPlayers(a, b));
        scores = [...scoresExtreme, ...scoresHard, ...scoresEasy];
        dispatch(setScores(scores));
      })
      .catch(err => {
        alert('The scores have not been retrieved, please try again');
      });
  };
};

export const setScores = scores => {
  return {
    type: SET_SCORES,
    scores: scores
  };
};
