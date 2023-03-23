import {LIST_REQUEST, COMMENT_REQUEST} from '../Constants';

export function list(category) {
  return {
    type: LIST_REQUEST,
    payload: category,
  };
}

export function commentRequest(inputTextComment) {
  return {
    type: COMMENT_REQUEST,
    payload: inputTextComment,
  };
}
