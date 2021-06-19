import { RootState } from '../index';
import { CommonError } from '../types';
import { GenerateFormSuccessResponse } from './types';

export const selectGenerateFormData = (state: RootState): GenerateFormSuccessResponse | undefined =>
  state.forms.generate.data;

export const selectGenerateFormLoading = (state: RootState): boolean => state.forms.generate.loading;

export const selectGenerateFormSuccess = (state: RootState): boolean => state.forms.generate.success;

export const selectGenerateFormError = (state: RootState): CommonError | undefined => state.forms.generate.error;
