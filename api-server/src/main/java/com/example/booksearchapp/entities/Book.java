package com.example.booksearchapp.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Book {
    Integer id;
    String isbnCode;
    String name;
    Integer number;
    String imagePath;
    String link;
    Boolean isDeleted;
    List<Label> labels;
    List<Category> categories;
}
