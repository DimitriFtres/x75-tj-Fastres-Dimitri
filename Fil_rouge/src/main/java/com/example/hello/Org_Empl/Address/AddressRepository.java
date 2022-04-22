package com.example.hello.Org_Empl.Address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Integer> {
  Address findById(int id);
  @Query("SELECT e from Address e where e.employee IS NULL" +
          " AND e.contact IS NULL " +
          "AND e.organization IS NULL")
  List<Address> getAddressesNotLinked();
}
