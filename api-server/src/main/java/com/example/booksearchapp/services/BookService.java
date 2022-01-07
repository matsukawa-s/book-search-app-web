package com.example.booksearchapp.services;

import com.example.booksearchapp.entities.Book;
import com.example.booksearchapp.forms.SearchForm;
import com.example.booksearchapp.mappers.BookMapper;
import com.example.booksearchapp.mappers.LendingAndBorrowingMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService implements IBookService {
    private final BookMapper bookMapper;
    private final LendingAndBorrowingMapper lendingAndBorrowingMapper;

    public BookService(BookMapper bookMapper, LendingAndBorrowingMapper lendingAndBorrowingMapper) {
        this.bookMapper = bookMapper;
        this.lendingAndBorrowingMapper = lendingAndBorrowingMapper;
    }

    @Override
    public List<Book> findAll() {
        return bookMapper.findAll();
    }

    @Override
    public Book get(Integer id) {
        return bookMapper.get(id);
    }

    @Override
    public List<Book> search(SearchForm searchForm) {
        return bookMapper.search(searchForm);
    }

    @Override
    public Integer borrow(Integer id) {
        return lendingAndBorrowingMapper.borrow(id);
    }

    @Override
    public Integer returnBook(Integer id) {
        return lendingAndBorrowingMapper.returnBook(id);
    }


}
