package com.example.booksearchapp.mappers;

import com.example.booksearchapp.entities.Book;
import com.example.booksearchapp.entities.Label;
import com.example.booksearchapp.forms.SearchForm;
import com.example.booksearchapp.responses.BookResponse;
import com.example.booksearchapp.responses.LabelResponse;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface BookMapper {
    public List<Book> findAll();
    public Book get(Integer id);
    public List<Book> search(SearchForm searchForm);
}
