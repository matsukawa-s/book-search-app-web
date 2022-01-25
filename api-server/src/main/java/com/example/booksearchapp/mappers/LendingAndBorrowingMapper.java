package com.example.booksearchapp.mappers;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LendingAndBorrowingMapper {
    public Integer borrow(Integer id);
    public Integer returnBook(Integer id);

}
