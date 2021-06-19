/* eslint-disable camelcase */
export interface VerificationsListItem {
  verified: boolean;
  comment?: string;
}

export interface VerificationData {
  applicant_id: string;
  verification_id: string;
  status: string;
  verified: boolean;
  verifications: {
    [key: string]: VerificationsListItem;
  };
};

  