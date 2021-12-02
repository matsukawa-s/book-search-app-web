create table users
(
    id int unsigned auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    password varchar(300) null,
    authority int not null,
    id_deleted boolean default false not null,
    constraint users_pk
        primary key (id)
);
