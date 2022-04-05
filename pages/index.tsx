import DashboardCard from '../components/dashboard/card';
import SearchBar from '../components/dashboard/searchBar';
import { useMemo, useState } from 'react';

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
  const filteredRecords = useMemo(
    () => records.filter(r => r.user.toLowerCase().includes(search.toLowerCase()) || r.exercise.name.toLowerCase().includes(search.toLowerCase())),
    [search, records],
  );

  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-300 opacity-40  mb-4" />
      <SearchBar search={search} onChange={setSearch} />
      <div role="list" className="h-[65vh] overflow-y-auto mt-4">
        {filteredRecords.map(r => (
          <DashboardCard record={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}
