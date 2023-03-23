import {
  LEARNING_DISABLE,
  LEARNING_ENABLE,
  LEARNING_FAILED,
  LEARNING_REQUEST,
  LEARNING_RESPONSE,
} from '../Constants';

const initialStale = {
  id: '',
  isLearning: true,
  isLearningLoading: false,
  responseArrayLearning: [],
};

const learningReducer = (state = initialStale, action) => {
  switch (action.type) {
    case LEARNING_REQUEST:
      return {
        ...state,
        id: action.id,
      };
    case LEARNING_RESPONSE:
      if (action.response) {
        return {
          ...state,
          responseArrayLearning: action.response,
        };
      }

    case LEARNING_FAILED: {
      return {
        ...state,
        isLearning: false,
      };
    }
    case LEARNING_ENABLE:
      return {
        ...state,
        isLearningLoading: true,
      };
    case LEARNING_DISABLE:
      return {
        ...state,
        isLearningLoading: false,
      };
    default:
      return state;
  }
};

export default learningReducer;
