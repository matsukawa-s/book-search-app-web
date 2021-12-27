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
    Integer levelId;
    String imagePath;
    String link;
    Boolean isDeleted;
    List<Label> labels;
    List<Category> categories;
    Integer booksCount;
}
