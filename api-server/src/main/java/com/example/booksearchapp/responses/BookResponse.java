package com.example.booksearchapp.responses;



import com.example.booksearchapp.entities.Book;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class BookResponse {
    Integer id;
    String isbnCode;
    String name;
    Integer number;
    String imagePath;
    String link;
    List<LabelResponse> labels;
    List<CategoryResponse> categories;
    Integer booksCount;

    public static BookResponse from(Book book){
        BookResponse bookResponse = new BookResponse();
        bookResponse.setId(book.getId());
        bookResponse.setIsbnCode(book.getIsbnCode());
        bookResponse.setName(book.getName());
        bookResponse.setNumber(book.getNumber());
        bookResponse.setImagePath(book.getImagePath());
        bookResponse.setLink(book.getLink());
        bookResponse.setLabels(LabelResponse.from(book.getLabels()));
        bookResponse.setCategories(CategoryResponse.from(book.getCategories()));
        bookResponse.setBooksCount(book.getBooksCount());
        return bookResponse;
    }

    public static List<BookResponse> from(List<Book> books){
        List<BookResponse> result = new ArrayList<>();
        for (Book book : books){
            result.add(BookResponse.from(book));
        }
        return result;
    }
}

