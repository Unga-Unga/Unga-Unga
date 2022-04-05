export type Exercise = {
  name: string;
  id: string;
};

export type Record = {
  id: string;
  exercise: string;
  user: string;
  weight: number;
  date: Date;
};
