import DashboardCard from '../components/dashboard/card';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import SmallCard from '../components/dashboard/smallCard';
import { addDoc, collection, getDocs } from 'firebase/firestore';
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
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-400 opacity-40  mb-4" />

      <button
        onClick={() => {
          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 70,
            reps: 2,
            exercise: 'Bench Press',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 134,
            reps: 5,
            exercise: 'Chest Fly',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 27,
            reps: 12,
            exercise: 'Triceps Press',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 0,
            reps: 6,
            exercise: 'Dips',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 10,
            reps: 20,
            exercise: 'Lateral Raise',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 25,
            reps: 12,
            exercise: 'DB Press',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 32,
            reps: 12,
            exercise: 'Face pull',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 120,
            reps: 2,
            exercise: 'Deadlift',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 0,
            reps: 0,
            exercise: 'Pullup',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 70,
            reps: 12,
            exercise: 'Barbell Row',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 54,
            reps: 10,
            exercise: 'Seated Row',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 53,
            reps: 8,
            exercise: 'Biceps Maquina',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 255,
            reps: 10,
            exercise: 'Leg Press',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 66,
            reps: 12,
            exercise: 'Hip Adductor',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 100,
            reps: 10,
            exercise: 'Leg Extension',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 54,
            reps: 8,
            exercise: 'Leg Curl',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 40,
            reps: 20,
            exercise: 'Calf Raise',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 35,
            reps: 10,
            exercise: 'Overhead Press',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 52,
            reps: 8,
            exercise: 'Lat Pulldown',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 20,
            reps: 15,
            exercise: 'Hyper Extension',
            date: new Date(),
          } as Record);

          addDoc(collection(userCtx.db, 'records'), {
            user: 'Jose',
            weight: 0,
            reps: 0,
            exercise: 'Ab Wheel',
            date: new Date(),
          } as Record);
        }}>
        Lol
      </button>
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
