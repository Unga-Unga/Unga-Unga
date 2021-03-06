import { SparklesIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Exercise, Record } from '../../types';

const DashboardCard = ({ exercise, record }: { record?: Record; exercise: Exercise }) => {
  return (
    <div className="bg-white rounded mb-4 shadow-lg">
      <Link href={`/exercise/${exercise.name}`}>
        <div className="px-4 py-4 flex items-center sm:px-6 block hover:bg-gray-50">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate">{exercise.name}</p>
              </div>
              <div className="mt-2 flex">
                {record && (
                  <div className="flex items-center text-sm text-gray-500">
                    <SparklesIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      {record.user} @ {record.weight}kg x {record.reps}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashboardCard;
