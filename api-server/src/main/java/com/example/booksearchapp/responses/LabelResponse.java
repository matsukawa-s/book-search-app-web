package com.example.booksearchapp.responses;

import com.example.booksearchapp.entities.Label;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter

public class LabelResponse {
    Integer id;
    String name;
    Integer sortNumber;
    Integer labelGroupId;

    public static LabelResponse from(Label label){
        LabelResponse labelResponse = new LabelResponse();
        labelResponse.setId(label.getId());
        labelResponse.setName(label.getName());
        labelResponse.setSortNumber(label.getSortNumber());
        labelResponse.setLabelGroupId(label.getLabelGroupId());
        return labelResponse;
    }

    public static List<LabelResponse> from(List<Label> labels){
        List<LabelResponse> result = new ArrayList<>();
        for (Label label : labels){
            result.add(LabelResponse.from(label));
        }
        return result;
    }
}
