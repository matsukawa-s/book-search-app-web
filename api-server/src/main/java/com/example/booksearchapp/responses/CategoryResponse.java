package com.example.booksearchapp.responses;

import com.example.booksearchapp.entities.Category;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter

public class CategoryResponse {
    Integer id;
    String name;
    Integer sortNumber;

    public static CategoryResponse from(Category category){
        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setId(category.getId());
        categoryResponse.setName(category.getName());
        categoryResponse.setSortNumber(category.getSortNumber());
        return categoryResponse;
    }

    public static List<CategoryResponse> from(List<Category> categories){
        List<CategoryResponse> result = new ArrayList<>();
        for (Category category : categories){
            result.add(CategoryResponse.from(category));
        }
        return result;
    }
}
