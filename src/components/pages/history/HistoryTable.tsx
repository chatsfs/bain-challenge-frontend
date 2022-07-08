import { History } from '@core/types/entities';
import React, { FC } from 'react';
import { TableRow } from './TableRow';

export const HistoryTable: FC<{ loader?: Boolean; history?: History[] }> = ({ loader = true, history = [] }) => {
  return (
    <table className="min-w-full">
      <thead className="border-b">
        <tr className="text-center">
          {['ID', 'From:', 'To:', 'Distance:'].map((header) => (
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loader ? (
          <tr>
            <td colSpan={4} className="text-center">
              Loading...
            </td>
          </tr>
        ) : (
          history?.map((item) => <TableRow key={item.id} item={item}></TableRow>)
        )}
      </tbody>
    </table>
  );
};
