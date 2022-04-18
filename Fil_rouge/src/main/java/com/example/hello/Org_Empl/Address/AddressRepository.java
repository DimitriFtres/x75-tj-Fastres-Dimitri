package com.example.hello.Org_Empl.Address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Integer> {
  Address findById(int id);
}
