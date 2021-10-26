create table categories
(
    id int auto_increment,
    name varchar(50) not null,
    id_deleted boolean default false not null,
    sort_number int not null,
    constraint categories_pk
        primary key (id)
);
