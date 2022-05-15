package com.example.hello.Org_Empl.Employee;

import com.example.hello.Auth.Account.Account;
import com.example.hello.Org_Empl.Address.Address;
import com.example.hello.Org_Empl.Organization.Organization;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employee_id;
    @NotNull
    private String role;
    private boolean actif;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false, referencedColumnName = "account_id")
    private Account account;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "employee")
    private List<Address> addresses;

    @ManyToOne
    @JoinColumn(name = "organization_id", nullable = false, referencedColumnName = "organization_id")
    private Organization organization;


    public Employee(EmployeeUpdatePayload employee) {
        this.employee_id = employee.getEmployee_id();
        this.role = employee.getRole();
        this.actif = employee.isActif();
        this.account = employee.getAccount();
        this.organization = employee.getOrganization();
        this.addresses = employee.getAddresses();
    }

    public static class Builder{
        int employee_id;
        private String role;
        boolean actif = false;
        Account account;
        private List<Address> addresses;
        Organization organization;

        public Builder setEmployee_id(int employee_id) {
            this.employee_id = employee_id;
            return this;
        }

        public Builder setRole(String role) {
            this.role = role;
            return this;
        }

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }

        public Builder setAccount(Account account) {
            this.account = account;
            return this;
        }

        public Builder setOrganization(Organization organization) {
            this.organization = organization;
            return this;
        }

        public Builder setAddresses(List<Address> addresses) {
            this.addresses = addresses;
            return this;
        }

        public Employee build(){
            return new Employee(employee_id, role, actif, account, addresses, organization);
        }
    }
}
