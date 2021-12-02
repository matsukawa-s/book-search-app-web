create table labels
(
    id int unsigned auto_increment,
    name varchar(100) not null,
    sort_number int not null,
    label_group_id int unsigned not null,
    constraint labels_pk
        primary key (id),
    constraint labels_label_group_id_fk
        foreign key (label_group_id) references label_groups (id)
            on delete cascade
);