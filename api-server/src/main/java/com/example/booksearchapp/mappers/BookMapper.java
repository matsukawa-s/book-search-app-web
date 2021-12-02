package com.example.booksearchapp.mappers;

import com.example.booksearchapp.entities.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
    public List<Book> findAll();
    public Book get(Integer id);
}
