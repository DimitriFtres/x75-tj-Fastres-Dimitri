package com.example.contactbookback.contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Integer> {
  Account findById(int id);
}
