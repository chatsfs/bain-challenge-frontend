import { useLocation } from '@lib/hooks/data/useLocation';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { HistoryTable } from '../../components/pages/history/HistoryTable';

function HistoryScene() {
  const [{ locationsLoading, history }, { getHistory }] = useLocation();

  useEffect(() => {
    getHistory!();
  }, []);
  return (
    <div className="flex flex-col w-full max-w-3xl h-screen">
      <div className=" ">
        <div className="py-2 inline-block min-w-full">
          <div className="">
            <HistoryTable loader={locationsLoading} history={history}></HistoryTable>
            <div className="flex items-center justify-center text-center flex-wrap mb-1">
              <Link href={'/'}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Calculate another address
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryScene;
