create table levels
(
    id int auto_increment,
    name varchar(50) not null,
    sort_number int not null,
    constraint levels_pk
        primary key (id)
);