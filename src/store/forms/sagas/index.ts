import { takeEvery } from 'redux-saga/effects';

import { GENERATE_FORM_FETCH } from '../constants';
import { generateFormSaga } from './generateFormSaga';

export function* rootFormsSaga() {
  yield takeEvery(GENERATE_FORM_FETCH, generateFormSaga);
}
