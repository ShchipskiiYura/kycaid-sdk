import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

import { formsReducer, FormsState, rootFormsSaga } from './forms';
import { verificationsReducer, VerificationsState, rootVerificationsSaga } from './verifications';

export * from './forms';
export * from './verifications';

export interface RootState {
  forms: FormsState;
  verifications: VerificationsState;
}

export const rootReducer = combineReducers({
  forms: formsReducer,
  verifications: verificationsReducer,
});

export function* rootSaga() {
  yield all([
    call(rootFormsSaga),
    call(rootVerificationsSaga),
  ]);
}
