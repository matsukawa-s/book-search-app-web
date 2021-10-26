create table categorizations
(
    id int auto_increment,
    book_id int not null,
    category_id int not null,
    constraint categorizations_pk
        primary key (id),
    constraint categorizations_books_id_fk
        foreign key (book_id) references books (id)
            on delete cascade,
    constraint categorizations_categories_id_fk
        foreign key (category_id) references categories (id)
            on delete cascade
);