create table books
(
    id int unsigned auto_increment,
    isbn_code varchar(50) null,
    name varchar(300) not null,
    number int not null,
    image_path varchar(300) null,
    link varchar(300) null,
    is_deleted boolean default false not null,
    constraint books_pk
        primary key (id)
);
