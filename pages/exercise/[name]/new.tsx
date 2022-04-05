import { useState } from 'react';

const NewExercise = () => {
  const [weight, setWeight] = useState(0);
  const [repetitions, setRepetitions] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="min-w-full">
            <div className="bg-white border-b p-4 flex flex-col gap-6">
              <div className="text-3xl text-center font-bold pt-4">Nuevo Record</div>
              <div className="flex flex-col justify-between gap-4">
                <span className="w-full">Peso</span>
                <input onChange={e => setWeight(+e.target?.value)} className="w-full rounded-md" type="number" />
              </div>
              <div className="flex flex-col justify-between gap-4">
                <span className="w-full">Repeticiones</span>
                <input onChange={e => setRepetitions(+e.target?.value)} className="w-full rounded-md" type="number" />
              </div>
              <div className="text-xs font-bold italic">
                <span>Max calculado: </span> {(weight / (1.0278 - 0.0278 * repetitions)).toFixed(0)} kg
              </div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewExercise;
