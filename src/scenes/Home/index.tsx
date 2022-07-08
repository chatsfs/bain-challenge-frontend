import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from '@lib/hooks/data/useLocation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    firstLocation: yup.string().required(),
    secondLocation: yup.string().required(),
  })
  .required();
const HomeScene = () => {
  const [{ distanceLoading, distance, distanceError }, { getDistance }] = useLocation();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    getDistance!({ firstLocation: data.firstLocation, secondLocation: data.secondLocation });
  };
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold mb-3 text-center ">Distance Calculator</h1>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-location">
          First Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first-location"
          type="text"
          placeholder="Address"
          {...register('firstLocation')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="second-location">
          Second Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="second-location"
          type="text"
          placeholder="Address"
          {...register('secondLocation')}
        />
      </div>
      {distance && !distance?.distance ? (
        <p>Error: Try different locations</p>
      ) : distance && distanceLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full mb-2 font-medium">
          <p>
            <span className="font-extrabold">Distance:</span> {distance?.distance.toFixed(0)} km
          </p>
          <p>
            <span className="font-extrabold">From:</span> {distance?.displayName1}
          </p>
          <p>
            <span className="font-extrabold">To:</span> {distance?.displayName2}
          </p>
        </div>
      )}
      <div className="flex items-center justify-center text-center flex-wrap mb-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Calculate
        </button>
      </div>
      <div className="flex items-center justify-center text-center w-full">
        <Link href={'/history'}>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Last searches
          </button>
        </Link>
      </div>
    </form>
  );
};

export default HomeScene;
