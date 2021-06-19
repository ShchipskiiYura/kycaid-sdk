import { Config } from '../../App';
import { CommonError } from '../types';
import {
  GENERATE_FORM_DATA,
  GENERATE_FORM_ERROR,
  GENERATE_FORM_FETCH,
} from './constants';

export interface GenerateFormFetch {
  type: typeof GENERATE_FORM_FETCH;
  payload: Config;
}

export interface GenerateFormData {
  type: typeof GENERATE_FORM_DATA;
  payload: any;
}

export interface GenerateFormError {
  type: typeof GENERATE_FORM_ERROR;
  payload: CommonError;
}

export type FormsAction =
    GenerateFormFetch
  | GenerateFormData
  | GenerateFormError;

export const generateForm = (payload: GenerateFormFetch['payload']): GenerateFormFetch => ({
  type: GENERATE_FORM_FETCH,
  payload,
});

export const generateFormData = (payload: GenerateFormData['payload']): GenerateFormData => ({
  type: GENERATE_FORM_DATA,
  payload,
});

export const generateFormError = (payload: GenerateFormError['payload']): GenerateFormError => ({
  type: GENERATE_FORM_ERROR,
  payload,
});
