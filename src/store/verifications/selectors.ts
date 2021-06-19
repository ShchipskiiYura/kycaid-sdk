import { RootState } from '../index';
import { CommonError } from '../types';
import { VerificationData } from './types';

export const selectGetVerificationData = (state: RootState): VerificationData | undefined =>
  state.verifications.getVerification.data;

export const selectGetVerificationLoading = (state: RootState): boolean =>
  state.verifications.getVerification.loading;

export const selectGetVerificationSuccess = (state: RootState): boolean =>
  state.verifications.getVerification.success;

export const selectGetVerificationError = (state: RootState): CommonError | undefined =>
  state.verifications.getVerification.error;
