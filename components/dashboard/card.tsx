import { SparklesIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Exercise } from '../../types';

const DashboardCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <div className="bg-white rounded mb-4 shadow-lg">
      <a href="#" className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate">{exercise.name}</p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  <SparklesIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {/*<p>*/}
                  {/*  {record.user} @ {record.weight}kg*/}
                  {/*</p>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default DashboardCard;
