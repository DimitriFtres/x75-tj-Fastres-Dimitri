package com.example.hello.Org_Empl.Address;

import com.example.hello.Auth.Account.Account;
import com.example.hello.Contact.Contact.Contact;
import com.example.hello.Org_Empl.Employee.Employee;
import com.example.hello.Org_Empl.Organization.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressUpdatePayload {
    private int address_id;
    private String type;
    private String road;
    private String number;
    private String box;
    private String cp;
    private String town;
    private String country;
    private Employee employee;
    private Organization organization;
    private Contact contact;

    public AddressUpdatePayload(Address address) {
        this.address_id = address.getAddress_id();
        this.type = address.getType();
        this.road = address.getRoad();
        this.number = address.getNumber();
        this.box = address.getBox();
        this.cp = address.getCp();
        this.town = address.getTown();
        this.country = address.getCountry();
        this.employee = address.getEmployee();
        this.organization = address.getOrganization();
        this.contact = address.getContact();
    }
}
