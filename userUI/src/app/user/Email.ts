export interface Email {
  toEmailId: string;
  fromEmailId: string;
  fileName: string;
  uploadUser: string;
  uploadDate: string;
}

export const UNKNOWN_EMAIL = {} as Email;
