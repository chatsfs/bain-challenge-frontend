import { createContext } from 'react';
import { LocationContextProps } from './types';

const defaultValue: LocationContextProps = [
  {
    history: [],
    distance: undefined,
    locationsLoading: false,
    locationsError: undefined,
  },
  {
    getDistance: async () => {
      /*Empty function*/
    },
    getHistory: async () => {
      /*Empty function*/
    },
  },
];

export const LocationContext = createContext<LocationContextProps>(defaultValue);
