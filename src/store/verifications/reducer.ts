import { CommonError } from '../types';
import { VerificationsAction } from './actions';
import {
  GET_VERIFICATION_DATA,
  GET_VERIFICATION_ERROR,
  GET_VERIFICATION_FETCH,
  GET_VERIFICATION_RESET,
} from './constants';
import { VerificationData } from './types';

export interface VerificationsState {
  getVerification: {
    success: boolean;
    loading: boolean;
    data?: VerificationData;
    error?: CommonError;
  };
}

export const initialVerificationsState: VerificationsState = {
  getVerification: {
    success: false,
    loading: false,
  },
};

export const getVerificationReducer = (state: VerificationsState['getVerification'], action: VerificationsAction) => {
  switch (action.type) {
  case GET_VERIFICATION_FETCH:
    return {
      ...state,
      loading: true,
      success: false,
    };
  case GET_VERIFICATION_DATA:
    return {
      ...state,
      loading: false,
      success: true,
      data: action.payload,
      error: undefined,
    };
  case GET_VERIFICATION_ERROR:
    return {
      ...state,
      loading: false,
      success: false,
      data: undefined,
      error: action.payload,
    };
  case GET_VERIFICATION_RESET:
    return {
      ...state,
      loading: false,
      success: false,
      data: undefined,
      error: undefined,
    };
  default:
    return state;
  }
};

export const verificationsReducer = (state = initialVerificationsState, action: VerificationsAction) => {
  switch (action.type) {
  case GET_VERIFICATION_FETCH:
  case GET_VERIFICATION_DATA:
  case GET_VERIFICATION_ERROR:
  case GET_VERIFICATION_RESET:
    const getVerificationState = { ...state.getVerification };
    return {
      ...state,
      getVerification: getVerificationReducer(getVerificationState, action),
    };
  default:
    return state;
  }
};
