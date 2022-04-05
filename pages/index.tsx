import DashboardCard from '../components/dashboard/card';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import SmallCard from '../components/dashboard/smallCard';
import { collection, getDocs } from 'firebase/firestore';
import { useUser } from '../providers/user.provider';
import { Exercise, Record } from '../types';
import groupBy from 'lodash/groupBy';

export default function Home() {
  const userCtx = useUser();
  const [isExercises, setIsExercises] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [records, setRecords] = useState<{ [x: string]: Record[] }>({});

  useEffect(() => {
    const getData = async () => {
      const [resEx, resRecords] = await Promise.all([getDocs(collection(userCtx.db, 'exercises')), getDocs(collection(userCtx.db, 'records'))]);
      setExercises((resEx.docs.map(d => d.data()) as Exercise[]).sort((e1, e2) => e1.name.localeCompare(e2.name)));
      setRecords(
        groupBy(
          resRecords.docs
            .map(d => d.data())
            .sort((r1, r2) => {
              if (r2.weight === r1.weight) return r2.reps - r1.reps;

              return r2.weight - r1.weight;
            }) as Record[],
          'exercise',
        ),
      );
    };

    getData();
  }, [userCtx.db]);

  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-400 opacity-40 mb-4" />

      <div className="w-full flex justify-center items-center mt-4">
        <nav className="flex space-x-4" aria-label="Tabs">
          <span
            onClick={() => setIsExercises(!isExercises)}
            className={classNames(
              !isExercises ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
              'px-3 py-2 font-medium text-sm rounded-md',
            )}>
            Records
          </span>

          <span
            onClick={() => setIsExercises(!isExercises)}
            className={classNames(
              isExercises ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
              'px-3 py-2 font-medium text-sm rounded-md',
            )}>
            Ejercicios
          </span>
        </nav>
      </div>

      {isExercises && (
        <div role="list" className="h-[75vh] overflow-y-auto mt-3">
          {exercises.map(e => (
            <DashboardCard exercise={e} key={e.id} record={records[e.name] ? records[e.name][0] : undefined} />
          ))}
        </div>
      )}

      {!isExercises && (
        <div role="list" className="h-[65vh] overflow-y-auto grid gap-2 grid-cols-2 mt-3">
          {Object.keys(records).map(ex => (
            <SmallCard exercise={ex} records={records[ex]} key={ex} />
          ))}
        </div>
      )}
    </div>
  );
}
