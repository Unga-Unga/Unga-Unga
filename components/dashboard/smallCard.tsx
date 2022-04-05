import { Record } from '../../types';

const SmallCard = ({ records, exercise }: { exercise: string; records: Record[] }) => {
  return (
    <div className="rounded shadow-xl bg-white py-2">
      <div className="border-b border-slate-300 py-1">
        <p className="px-2 w-full text-center font-bold text-sm">{exercise}</p>
      </div>
      <div className="flex flex-col px-2 py-1">
        {records.slice(0, 3).map((r, i) => (
          <p className="text-sm" key={r.user}>
            #{i + 1} {r.user} - 8 🦍
          </p>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
