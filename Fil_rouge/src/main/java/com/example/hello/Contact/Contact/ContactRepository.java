package com.example.hello.Contact.Contact;

import com.example.hello.Contact.Contact.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact,Integer> {
  Contact findById(int id);
}
