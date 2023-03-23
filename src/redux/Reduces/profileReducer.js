import {DATE_REQUEST} from '../Constants';
import {SCHOOL_REQUEST} from '../Constants';
import {SEX_REQUEST} from '../Constants';
import {PASS_REQUEST} from '../Constants';
import {NAME_REQUEST} from '../Constants';
import loginReducer from './loginReducer';

const initialStale = {
  username: '',
  password: '',
  avatar: '',
  email: '',
  gender: '',
  school: '',
  date_of_birth: 0,
  token: 0,
  id: '',
};
const profileReducer = (state = initialStale, action) => {
  switch (action.type) {
    case DATE_REQUEST:
      return {
        ...state,
        date_of_birth: action.payload.date_of_birth,
      };
    case NAME_REQUEST:
      return {
        ...state,
        username: action.payload.username,
      };
    case SCHOOL_REQUEST:
      return {
        ...state,
        school: action.payload.school,
      };
    case SEX_REQUEST:
      return {
        ...state,
        gender: action.payload.gender,
      };
    case PASS_REQUEST:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default profileReducer;
