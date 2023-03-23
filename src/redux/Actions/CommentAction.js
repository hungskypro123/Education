import {COMMENT_REQUEST} from '../Constants';

export function commentRequest(inputTextComment) {
  console.log('DataAction', inputTextComment);
  return {
    type: COMMENT_REQUEST,
    payload: inputTextComment,
  };
}
