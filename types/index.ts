export type Exercise = {
  name: string;
  id: number;
};

export type Record = {
  id: number;
  exercise: Exercise;
  user: string;
  weight: number;
};
