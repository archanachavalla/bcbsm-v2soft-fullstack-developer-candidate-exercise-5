export interface User {
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

export const UNKNOWN_USER = {} as User;
