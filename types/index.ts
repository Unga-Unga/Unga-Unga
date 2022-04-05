export type Exercise = {
  name: string;
  id: string;
  withBody: false;
};

export type Record = {
  id: string;
  exercise: string;
  reps: number;
  user: string;
  weight: number;
  date: Date;
};
