package com.example.booksearchapp.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Category {
    Integer id;
    String name;
    Boolean idDeleted;
    Integer sortNumber;
}
