package com.example.booksearchapp.services;

import com.example.booksearchapp.entities.Book;
import com.example.booksearchapp.forms.SearchForm;

import java.util.List;

public interface IBookService {
    List<Book> findAll();
    Book get(Integer id);
    List<Book> search(SearchForm searchForm);
    Integer borrow(Integer id);
    Integer returnBook(Integer id);
}
