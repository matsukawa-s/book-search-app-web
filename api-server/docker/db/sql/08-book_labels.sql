create table book_labels
(
    id int unsigned auto_increment,
    book_id int unsigned not null,
    label_id int unsigned not null,
    constraint book_labels_pk
        primary key (id),
    constraint book_labels_books_id_fk
        foreign key (book_id) references books (id)
            on delete cascade,
    constraint book_labels_labels_id_fk
        foreign key (label_id) references labels (id)
            on delete cascade
);