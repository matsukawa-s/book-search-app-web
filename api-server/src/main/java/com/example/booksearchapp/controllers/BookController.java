package com.example.booksearchapp.controllers;

import com.example.booksearchapp.entities.Book;
import com.example.booksearchapp.forms.SearchForm;
import com.example.booksearchapp.responses.BookResponse;
import com.example.booksearchapp.services.IBookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("books")
public class BookController {
    private final IBookService bookService;

    public BookController(IBookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("")
    public List<BookResponse> findAll(){
        List<Book> bookList = bookService.findAll();
        return BookResponse.from(bookList);
    }

    @GetMapping("/{id}")
    public BookResponse get(@PathVariable Integer id) {
        Book book = bookService.get(id);
        return BookResponse.from(book);
    }

    @GetMapping("/search")
    public List<BookResponse> search(SearchForm searchForm){
        List<Book> bookList = bookService.search(searchForm);
        return BookResponse.from(bookList);
    }

    @PostMapping("/borrow")
    @ResponseBody
    public Integer borrow(Integer id){
        Integer lending = bookService.borrow(id);
        return lending;
    }

    @PostMapping("/return")
    @ResponseBody
    public Integer returnBook(Integer id){
        Integer lending = bookService.returnBook(id);
        return lending;
    }
}
