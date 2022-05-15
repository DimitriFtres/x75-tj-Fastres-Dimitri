package com.example.hello.Org_Empl.Address;

import com.example.hello.Contact.Contact.Contact;
import com.example.hello.Org_Empl.Employee.Employee;
import com.example.hello.Org_Empl.Employee.EmployeeUpdatePayload;
import com.example.hello.Org_Empl.Organization.Organization;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
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
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int address_id;
    @NotNull
    private String type;
    @NotNull
    private String road;
    @NotNull
    private String number;
    @NotNull
    private String box;
    @NotNull
    private String cp;
    @NotNull
    private String town;
    @NotNull
    private String country;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = true, referencedColumnName = "employee_id")
    @JsonIgnore
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "organization_id", nullable = true, referencedColumnName = "organization_id")
    @JsonIgnore
    private Organization organization;

    @ManyToOne
    @JoinColumn(name = "contact_id", nullable = true, referencedColumnName = "contact_id")
    @JsonIgnore
    private Contact contact;

    public Address(AddressUpdatePayload address) {
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

    public static class Builder
    {
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

        public Builder setAddress_id(int address_id) {
            this.address_id = address_id;
            return this;
        }

        public Builder setType(String type) {
            this.type = type;
            return this;
        }

        public Builder setRoad(String road) {
            this.road = road;
            return this;
        }

        public Builder setNumber(String number) {
            this.number = number;
            return this;
        }

        public Builder setBox(String box) {
            this.box = box;
            return this;
        }

        public Builder setCp(String cp) {
            this.cp = cp;
            return this;
        }

        public Builder setTown(String town) {
            this.town = town;
            return this;
        }

        public Builder setCountry(String country) {
            this.country = country;
            return this;
        }

        public Builder setEmployee(Employee employee) {
            this.employee = employee;
            return this;
        }

        public Builder setOrganization(Organization organization) {
            this.organization = organization;
            return this;
        }

        public Builder setContact(Contact contact) {
            this.contact = contact;
            return this;
        }

        public Address build()
        {
            return new Address(address_id, type, road, number, box, cp, town, country, employee, organization, contact);
        }
    }
}
