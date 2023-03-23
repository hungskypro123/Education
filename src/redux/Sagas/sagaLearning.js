import {call, put, select} from 'redux-saga/effects';
import ServiceLearning from '../../service/LearningService';
import {
  LEARNING_DISABLE,
  LEARNING_ENABLE,
  LEARNING_RESPONSE,
} from '../Constants';
import {
  enableLoader,
  callApiLearningResponse,
  disableLoader,
  callApiLearningFailed,
} from '../Actions/learningAction';
import {Alert} from 'react-native';
import {idUser} from '../Reduces';

export default function* mySagaCallApi() {
  try {
    yield put(enableLoader());

    let idUserPut = yield select(idUser);
    console.log(idUserPut);
    let response = yield call(ServiceLearning, idUserPut);

    if (response.status == 200) {
      yield put(callApiLearningResponse(response.data.couringList));
      yield put(disableLoader());
    } else {
      yield put(callApiLearningFailed());
      yield put(disableLoader());

      setTimeout(() => {
        Alert.alert('err', response.message);
      }, 200);
    }
  } catch (err) {
    console.log('[[]]]', err);
  }
}
