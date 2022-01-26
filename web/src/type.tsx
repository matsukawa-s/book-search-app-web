export type Book = {
  id: number;
  isbnCode: string;
  name: string;
  number: number;
  imagePath: string;
  link: null;
  labels: Label[];
  categories: Category[];
};

export type Label = {
  id: number;
  name: string;
  sortNumber: number;
  labelGroupId: number;
};

export type Category = {
  id: number;
  name: string;
  sortNumber: number;
};
