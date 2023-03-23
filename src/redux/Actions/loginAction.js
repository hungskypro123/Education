import {LOGIN_REQUEST} from '../Constants';
import {LOGOUT_REQUEST} from '../Constants';

export function login(user) {
  return {
    type: LOGIN_REQUEST,
    payload: user,
  };
}
