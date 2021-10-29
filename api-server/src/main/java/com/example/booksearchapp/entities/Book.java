package com.example.booksearchapp.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Book {
    Integer id;
    String isbnCode;
    String name;
    Integer number;
    Integer levelId;
    String imagePath;
    String link;
    Boolean isDeleted;
}
