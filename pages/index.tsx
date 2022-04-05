import DashboardCard from '../components/dashboard/card';
import SearchBar from '../components/dashboard/searchBar';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';
import SmallCard from '../components/dashboard/smallCard';

const records = [
  {
    id: 1,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 2,
    exercise: {
      name: 'Biceps',
      id: 1,
    },
    user: 'Carlos',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Patata',
      id: 1,
    },
    user: 'Carlos',
    weight: 120,
  },
  {
    id: 4,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 5,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 6,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 7,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 8,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 9,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 10,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 11,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 12,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [isLastRecords, setIsLastRecords] = useState(true);
  const filteredRecords = useMemo(
    () => records.filter(r => r.user.toLowerCase().includes(search.toLowerCase()) || r.exercise.name.toLowerCase().includes(search.toLowerCase())),
    [search, records],
  );

  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-400 opacity-40  mb-4" />

      <SearchBar disabled={!isLastRecords} search={search} onChange={setSearch} />

      <Switch.Group as="div" className="flex items-center w-full justify-end mt-4">
        <Switch.Label as="span" className="mr-3">
          <span className="text-sm font-medium text-gray-900">Últimos Records</span>
        </Switch.Label>
        <Switch
          checked={isLastRecords}
          onChange={setIsLastRecords}
          className={classNames(
            isLastRecords ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          )}>
          <span
            aria-hidden="true"
            className={classNames(
              isLastRecords ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            )}
          />
        </Switch>
      </Switch.Group>

      {isLastRecords && (
        <div role="list" className="h-[60vh] overflow-y-auto mt-4">
          {filteredRecords.map(r => (
            <DashboardCard record={r} key={r.id} />
          ))}
        </div>
      )}

      {!isLastRecords && (
        <div role="list" className="h-[60vh] overflow-y-auto grid gap-2 grid-cols-2 mt-4">
          {filteredRecords.map(r => (
            <SmallCard exercise={'Deadlift'} records={filteredRecords} key={r.id} />
          ))}
        </div>
      )}
    </div>
  );
}
