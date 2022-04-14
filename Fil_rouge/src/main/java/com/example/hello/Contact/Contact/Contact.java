package com.example.hello.Contact.Contact;

import com.example.hello.Org_Empl.Address.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int contact_id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

    @ManyToOne
    @JoinColumn(name = "adress_id", nullable = true, referencedColumnName = "address_id")
    private Address address; 

    public Contact(ContactUpdatePayload contact) {
        this.contact_id = contact.getContact_id();
        this.firstname = contact.getFirstname();
        this.lastname = contact.getLastname();
        this.email = contact.getEmail();
        this.phone = contact.getPhone();
        this.address = contact.getAddress();
    }

    public static class Builder
    {
        private int contact_id;
        private String firstname;
        private String lastname;
        private String email;
        private String phone;
        private Address address;

        public Builder setContact_id(int contact_id) {
            this.contact_id = contact_id;
            return this;
        }

        public Builder setFirstname(String firstname) {
            this.firstname = firstname;
            return this;
        }

        public Builder setLastname(String lastname) {
            this.lastname = lastname;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setPhone(String phone) {
            this.phone = phone;
            return this;
        }

        public Builder setAddress(Address address) {
            this.address = address;
            return this;
        }

        public Contact build()
        {
            return new Contact(contact_id, firstname, lastname, email, phone, address);
        }
    }

}
