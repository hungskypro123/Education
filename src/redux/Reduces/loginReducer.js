import {
  LOGIN_REQUEST,
  DATE_REQUEST,
  NAME_REQUEST,
  SEX_REQUEST,
  SCHOOL_REQUEST,
  PASS_REQUEST,
} from '../Constants';
const initialStale = {
  username: "you don't have a name",
  password: "you don't have a pasword",
  avatar: '',
  email: '',
  gender: '',
  school: '',
  date_of_birth: 0,
  token: 0,
  id: '',
};
const loginReducer = (state = initialStale, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        token: action.payload.token,
        id: action.payload.id,
        avatar: action.payload.avatar,
        email: action.payload.email,
        gender: action.payload.gender,
        school: action.payload.school,
        date_of_birth: action.payload.date_of_birth,
      };
    case DATE_REQUEST:
      return {
        ...state,
        date_of_birth: action.data.date_of_birth,
      };
    case NAME_REQUEST:
      return {
        ...state,
        username: action.data.username,
      };
    case SEX_REQUEST:
      return {
        ...state,
        gender: action.data.gender,
      };
    case SCHOOL_REQUEST:
      return {
        ...state,
        school: action.data.school,
      };
    case PASS_REQUEST:
      return {
        ...state,
        password: action.data.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
