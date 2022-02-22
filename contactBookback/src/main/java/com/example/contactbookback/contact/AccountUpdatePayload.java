package com.example.contactbookback.contact;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountUpdatePayload {
    private int id;
    @NotNull
    private String firstname;
    @NotNull
    private String name;
    @NotNull
    private String adress;
    @NotNull
    private String email;
}
