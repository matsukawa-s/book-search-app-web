insert into book_search_db.levels (id, name, sort_number) values (1, '初級', 1);
insert into book_search_db.levels (id, name, sort_number) values (2, '中級', 2);
insert into book_search_db.levels (id, name, sort_number) values (3, '上級', 3);

insert into book_search_db.categories (id, name, id_deleted, sort_number) values (1, 'Java', 0, 1);
insert into book_search_db.categories (id, name, id_deleted, sort_number) values (2, 'PHP', 0, 2);
insert into book_search_db.categories (id, name, id_deleted, sort_number) values (3, 'JavaScript', 0, 3);
insert into book_search_db.categories (id, name, id_deleted, sort_number) values (4, 'C#', 0, 4);

insert into book_search_db.books (id, isbn_code, name, number, level_id, image_path, link, is_deleted) values (1, '000-0-000000-00-0', 'Java入門', 1, 1, null, null, 0);
insert into book_search_db.books (id, isbn_code, name, number, level_id, image_path, link, is_deleted) values (2, '111-1-111111-11-1', 'Java実践編', 1, 2, null, null, 0);
insert into book_search_db.books (id, isbn_code, name, number, level_id, image_path, link, is_deleted) values (3, '222-2-222222-22-2', 'PHP入門', 2, 1, null, null, 0);

insert into book_search_db.categorizations (id, book_id, category_id) values (1, 1, 1);
insert into book_search_db.categorizations (id, book_id, category_id) values (2, 2, 1);
insert into book_search_db.categorizations (id, book_id, category_id) values (3, 3, 2);
