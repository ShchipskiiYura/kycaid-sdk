import { takeEvery } from 'redux-saga/effects';

import { GET_VERIFICATION_FETCH } from '../constants';
import { getVerificationSaga } from './getVerificationSaga';

export function* rootVerificationsSaga() {
  yield takeEvery(GET_VERIFICATION_FETCH, getVerificationSaga);
}
