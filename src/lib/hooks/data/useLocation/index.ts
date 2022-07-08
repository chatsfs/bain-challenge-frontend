import { LocationContext } from '@lib/context/location/location.context';
import { LocationContextProps } from '@lib/context/location/types';
import { useContext } from 'react';

export const useLocation = () => {
  return useContext<LocationContextProps>(LocationContext);
};
