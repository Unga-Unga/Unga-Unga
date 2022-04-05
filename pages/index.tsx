import DashboardCard from '../components/dashboard/card';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';
import SmallCard from '../components/dashboard/smallCard';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useUser } from '../providers/user.provider';
import { Exercise } from '../types';

export default function Home() {
  const userCtx = useUser();
  const [isExercises, setIsExercises] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getDocs(collection(userCtx.db, 'exercises'));
      setExercises(res.docs.map(d => d.data()) as Exercise[]);
    };

    getData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-400 opacity-40  mb-4" />

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
        <div role="list" className="h-[65vh] overflow-y-auto mt-3">
          {exercises.map(e => (
            <DashboardCard exercise={e} key={e.id} />
          ))}
        </div>
      )}

      {/*{!isExercises && (*/}
      {/*  <div role="list" className="h-[65vh] overflow-y-auto grid gap-2 grid-cols-2 mt-3">*/}
      {/*    {records.map(r => (*/}
      {/*      <SmallCard exercise={'Deadlift'} records={records} key={r.id} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
