export type Book = {
  id: number;
  isbnCode: string;
  name: string;
  number: number;
  imagePath: string;
  link: null;
  labels: Label[];
  categories: Category[];
  booksCount: number;
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

export type Leading = {
  id: number;
  lendingTime: Date;
  book: Book;
};
