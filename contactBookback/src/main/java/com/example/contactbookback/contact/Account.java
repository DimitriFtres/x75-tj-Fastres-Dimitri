package com.example.contactbookback.contact;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String firstname;
    @NotNull
    private String name;
    @NotNull
    private String adress;
    @NotNull
    private String email;


    public Account(AccountUpdatePayload account) {
        this.id = account.getId();
        this.firstname = account.getFirstname();
        this.name = account.getName();
        this.adress = account.getAdress();
        this.email = account.getEmail();
    }

    public static class Builder
    {
        private int id;
        @NotNull
        private String firstname;
        @NotNull
        private String name;
        @NotNull
        private String adress;
        @NotNull
        private String email;

        public Builder setAccount_id(int id) {
            this.id = id;
            return this;
        }

        public Builder setFirstname(String firstname) {
            this.firstname = firstname;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setAdress(String adress) {
            this.adress = adress;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Account build()
        {
            return new Account(id, firstname, name, adress, email);
        }

    }
}
