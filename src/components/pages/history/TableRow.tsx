import { History } from '@core/types/entities';
import React, { FC } from 'react';

export const TableRow: FC<{ item: History }> = ({ item }) => {
  return (
    <tr className="border-b">
      <td className="px-6 py-4 text-sm font-medium text-gray-900 text-center">{item.id}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4">{item.displayName1}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4">{item.displayName2}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4">{item.distance.toFixed(0)} km</td>
    </tr>
  );
};
