package com.example.booksearchapp.services;

import com.example.booksearchapp.entities.Book;

import java.util.List;

public interface IBookService {
    List<Book> findAll();
    Book get(Integer id);
}
