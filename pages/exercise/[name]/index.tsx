import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser } from '../../../providers/user.provider';

import groupBy from 'lodash/groupBy';
import { Record } from '../../../types';

const Exercise = () => {
  const router = useRouter();

  const { name: exerciseName } = router.query;

  const goToNewExercise = () => {
    router.push(`/exercise/${exerciseName}/new`);
  };

  const userCtx = useUser();

  const [records, setRecords] = useState<{ [x: string]: Record[] }>({});

  useEffect(() => {
    const getData = async () => {
      const resRecords = await getDocs(collection(userCtx.db, 'records'));

      setRecords(groupBy(resRecords.docs.map(d => d.data()).sort((r1, r2) => r2.weight - r1.weight) as Record[], 'exercise'));
    };

    getData();
  }, [userCtx.db]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="capitalize text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    {exerciseName}
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                    <button
                      onClick={goToNewExercise}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Nuevo Record
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {records?.[exerciseName as string]?.map((user, i) => (
                  <tr key={user.id} className="bg-gray-100 border-b">
                    <td className="flex flex-col gap-2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <span>
                        # {i + 1} {user.user}
                      </span>
                      <span className="italic text-xs font-bold">{user.weight} kg</span>
                    </td>
                    <td className="text-4xl text-right text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {i === 0 ? '🦍' : i === 1 ? '🏆' : i === 2 ? '💪🏽' : '🤡'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
