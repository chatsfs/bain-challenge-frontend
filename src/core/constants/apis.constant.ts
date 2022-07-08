const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api';

export const URLS = {
  CALCULATE_URL: `${BASE_URL}/locations/calculate`,
  LIST_SEARCHS: `${BASE_URL}/locations`,
};
