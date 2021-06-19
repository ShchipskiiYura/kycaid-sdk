import { CommonError } from '../types';
import { FormsAction } from './actions';
import {
  GENERATE_FORM_DATA,
  GENERATE_FORM_ERROR,
  GENERATE_FORM_FETCH,
} from './constants';
import { GenerateFormSuccessResponse } from './types';

export interface FormsState {
  generate: {
    success: boolean;
    loading: boolean;
    data?: GenerateFormSuccessResponse;
    error?: CommonError;
  };
}

export const initialFormsState: FormsState = {
  generate: {
    success: false,
    loading: false,
  },
};

export const generateFormReducer = (state: FormsState['generate'], action: FormsAction) => {
  switch (action.type) {
  case GENERATE_FORM_FETCH:
    return {
      ...state,
      loading: true,
      success: false,
    };
  case GENERATE_FORM_DATA:
    return {
      ...state,
      loading: false,
      success: true,
      data: action.payload,
      error: undefined,
    };
  case GENERATE_FORM_ERROR:
    return {
      ...state,
      loading: false,
      success: false,
      data: undefined,
      error: action.payload,
    };
  default:
    return state;
  }
};

export const formsReducer = (state = initialFormsState, action: FormsAction) => {
  switch (action.type) {
  case GENERATE_FORM_FETCH:
  case GENERATE_FORM_DATA:
  case GENERATE_FORM_ERROR:
    const generateFormState = { ...state.generate };
    return {
      ...state,
      generate: generateFormReducer(generateFormState, action),
    };
  default:
    return state;
  }
};
