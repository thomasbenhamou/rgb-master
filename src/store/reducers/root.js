import {
  SAVE_SCORES,
  CHANGE_DIFFICULTY,
  RESUME_GAME,
  PAUSE_GAME,
  SCORE_SUBMITTED,
  SET_SCORES
} from '../actions/actionTypes';

const initialState = {
  score: 0,
  time: 0,
  difficulty: 10,
  gamePaused: false,
  submitSuccess: false,
  scores: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SCORES:
      return {
        ...state,
        score: action.score,
        time: action.time
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.newLevel
      };
    case RESUME_GAME:
      return {
        ...state,
        gamePaused: false
      };
    case PAUSE_GAME:
      return {
        ...state,
        gamePaused: true
      };
    case SCORE_SUBMITTED:
      return {
        ...state,
        submitSuccess: true
      };
    case SET_SCORES:
      return {
        ...state,
        scores: action.scores
      };
    default:
      return state;
  }
};

export default reducer;
