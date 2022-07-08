import { DistanceProps } from '@core/network/apis/locations.api';
import { History } from '@core/types/entities';

export type LocationContextState = {
  history: History[];
  locationsLoading: boolean;
  locationsError: string | undefined;
  distance: History;
  distanceLoading: boolean;
  distanceError: string | undefined;
};

export type LocationContextSetters = {
  getDistance: (props: DistanceProps) => void;
  getHistory: () => void;
};

export type LocationContextProps = [Partial<LocationContextState>, Partial<LocationContextSetters>];

export type LocationsResponse = {
  active: boolean;
  createdAt: Date;
  displayName1: string;
  displayName2: string;
  distance: number;
  id: number;
  latitude1: string;
  latitude2: string;
  longitude1: string;
  longitude2: string;
  updatedAt: Date;
};
