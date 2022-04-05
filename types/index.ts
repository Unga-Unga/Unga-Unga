export type Exercise = {
  name: string;
  id: string;
};

export type Record = {
  id: number;
  exercise: Exercise;
  user: string;
  weight: number;
};
