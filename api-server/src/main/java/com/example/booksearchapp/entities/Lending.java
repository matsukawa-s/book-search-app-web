package com.example.booksearchapp.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Lending {
    Integer id;
    Integer bookId;
    Integer userId;
    Date lendingTime;
    Date returnTime;
}
