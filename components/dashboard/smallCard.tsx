import { useRouter } from 'next/router';
import { Record } from '../../types';

const SmallCard = ({ records, exercise }: { exercise: string; records: Record[] }) => {
  const router = useRouter();

  const goToExercise = () => {
    router.push(`/exercise/${exercise}`);
  };

  return (
    <div className="rounded shadow-xl bg-white py-2">
      <div onClick={goToExercise} className="border-b border-slate-300 py-1">
        <p className="px-2 w-full text-center font-bold text-sm text-indigo-600">{exercise}</p>
      </div>
      <div className="flex flex-col px-2 py-1">
        {records.slice(0, 5).map((r, i) => (
          <p className="text-sm" key={r.user}>
            #{i + 1} {r.user}{' '}
            <span className="text-xs">
              {Math.round(r.weight)}kg x {r.reps}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
