import { URLS } from '@core/constants/apis.constant';
import { APIManager } from '../util';

export type DistanceProps = {
  firstLocation: string;
  secondLocation: string;
};

const { CALCULATE_URL, LIST_SEARCHS } = URLS;

export const getDistance = async (props?: Partial<DistanceProps>) => {
  const params = {
    firstLocation: props!.firstLocation,
    secondLocation: props!.secondLocation,
  };
  const { data } = await APIManager.get(CALCULATE_URL, { params });
  return data;
};

export const getHistory = async () => {
  const { data } = await APIManager.get(LIST_SEARCHS);
  return data;
};
