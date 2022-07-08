import { getDistance as getDistanceApi, DistanceProps, getHistory as getHistoryApi } from '@core/network';
import { FC } from 'react';
import { useFetch } from '@lib/hooks/utils';
import { LocationContext } from './location.context';
import { LocationsResponse } from './types';
import { History } from '@core/types/entities';

export const LocationProvider: FC = (props) => {
  const {
    execute: getDistance,
    data: distanceResponse,
    error: distanceError,
    loading: distanceLoading,
  } = useFetch<LocationsResponse, Partial<DistanceProps>>({ api: getDistanceApi });

  const {
    execute: getHistory,
    data: locationsResponse,
    error: locationsError,
    loading: locationsLoading,
  } = useFetch<any, Partial<DistanceProps>>({ api: getHistoryApi });
  return (
    <LocationContext.Provider
      value={[
        {
          history: (locationsResponse || []) as History[],
          locationsError,
          locationsLoading,
          distance: distanceResponse as History,
          distanceError,
          distanceLoading,
        },
        { getDistance, getHistory },
      ]}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
