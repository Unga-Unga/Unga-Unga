import { ChevronRightIcon } from '@heroicons/react/solid';
import { SparklesIcon } from '@heroicons/react/outline';
import DashboardCard from '../components/dashboard/card';

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
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
  {
    id: 3,
    exercise: {
      name: 'Deadlift',
      id: 1,
    },
    user: 'Jose',
    weight: 120,
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl mb-2">Top Unga Unga</h1>
      <hr className="w-full h-[1px] border-b-[1px] border-slate-300 opacity-40  mb-4" />
      <div role="list" className="h-[75vh] overflow-y-auto">
        {records.map(r => (
          <DashboardCard record={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}
