import { useRouter } from 'next/router';

const Exercise = () => {
  const router = useRouter();

  const { name: exerciseName } = router.query;

  const users = [
    {
      id: 1,
      exercise: {
        name: 'Deadlift',
        id: 1,
        total: 11,
      },
      user: 'Jose',
      weight: 120,
    },
    {
      id: 2,
      exercise: {
        name: 'Deadlift',
        id: 1,
        total: 9,
      },
      user: 'Sergio',
      weight: 120,
    },
    {
      id: 3,
      exercise: {
        name: 'Deadlift',
        id: 1,
        total: 1,
      },
      user: 'Manu',
      weight: 120,
    },
    {
      id: 5,
      exercise: {
        name: 'Deadlift',
        id: 1,
        total: 10,
      },
      user: 'Carlos',
      weight: 120,
    },
    {
      id: 6,
      exercise: {
        name: 'Deadlift',
        id: 1,
        total: 50,
      },
      user: 'Miguel',
      weight: 120,
    },
  ].sort((a, b) => b.exercise.total - a.exercise.total);

  const goToNewExercise = () => {
    router.push(`/exercise/${exerciseName}/new`);
  };

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
                {users.map((user, i) => (
                  <tr key={user.id} className="bg-gray-100 border-b">
                    <td className="flex flex-col gap-2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <span>
                        # {i + 1} {user.user}
                      </span>
                      <span className="italic text-xs font-bold">{user.exercise.total} kg</span>
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
