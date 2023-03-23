import {call, put, select} from 'redux-saga/effects';
import CommentLearning from '../../service/CommentService';
import {comment, idCourse} from '../Reduces/index';

export default function* mySagasPush() {
  try {
    let commentPut = yield select(comment);
    let idCoursePut = yield select(idCourse);
    console.log('[[]]', idCoursePut);
    let response = yield call(CommentLearning, idCoursePut, {
      comment: commentPut,
    });
    // console.log('[[]]', response.data);
  } catch (err) {
    console.log('err===>>', err);
  }
}
