export interface Rating {
  username: string;
  ratingNumber: string;
  comment: string;
}

export const UNKNOWN_RATING = {} as Rating;
