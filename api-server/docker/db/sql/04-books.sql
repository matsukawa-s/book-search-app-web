create table books
(
    id int auto_increment,
    isbn_code varchar(50) null,
    name varchar(300) not null,
    number int not null,
    level_id int null,
    image_path varchar(300) null,
    link varchar(300) null,
    is_deleted boolean default false not null,
    constraint books_pk
        primary key (id),
    constraint books_levels_id_fk
        foreign key (level_id) references levels (id)
            on delete set null
);
