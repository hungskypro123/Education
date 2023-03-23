import {DATE_REQUEST} from '../Constants';
import {SCHOOL_REQUEST} from '../Constants';
import {SEX_REQUEST} from '../Constants';
import {PASS_REQUEST} from '../Constants';
import {NAME_REQUEST} from '../Constants';

export function changeName(id, data) {
  return {
    type: NAME_REQUEST,
    payload: id,
    data: data,
  };
}
export function changePass(id, data) {
  return {
    type: PASS_REQUEST,
    payload: id,
    data: data,
  };
}
export function changeSex(id, data) {
  return {
    type: SEX_REQUEST,
    payload: id,
    data: data,
  };
}
export function changeSchool(id, data) {
  return {
    type: SCHOOL_REQUEST,
    payload: id,
    data: data,
  };
}
export function changeDate(data) {
  return {
    type: DATE_REQUEST,
    data: data,
  };
}
