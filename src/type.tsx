export type Book = {
  id: number;
  isbnCode: string;
  name: string;
  number: number;
  imagePath: string;
  link: null;
  tags: Tag[];
  genres: Genre[];
  booksCount: number;
};

export type SelectType = {
  id: number;
  name: string;
};

export type Tag = {
  id: number;
  name: string;
  sortNumber: number;
  labelGroupId: number;
};

export type Genre = {
  id: number;
  name: string;
  sortNumber: number;
};

export type Lending = {
  id: number;
  lendingTime: Date;
  book: Book;
};

export type History = {
  id: number;
  lendingTime: Date;
  returnTime: Date;
  book: Book;
};

// export type BookHistory = {
//   lendingTime: Date;
//   user:
// };
