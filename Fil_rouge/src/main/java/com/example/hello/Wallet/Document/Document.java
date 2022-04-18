package com.example.hello.Wallet.Document;

import com.example.hello.Org_Empl.Employee.Employee;
import com.example.hello.Org_Empl.Organization.Organization;
import com.example.hello.Wallet.Transaction.Transaction;
import com.example.hello.Wallet.Wallet.Wallet;
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
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int document_id;
    @NotNull
    private String name;
    @NotNull
    private String description;
    private boolean free_access;
    private String path;
    private String type;

    @ManyToMany
    @JoinColumn(name = "document_id", nullable = true)
    private List<Employee> employees;

    @ManyToMany
    @JoinColumn(name = "document_id", nullable = true)
    private List<Organization> organizations;

    @OneToOne
    @JoinColumn(name = "document_id", nullable = true)
    private Transaction transaction;

    public Document(DocumentUpdatePayload payload)
    {
        this.setDescription(payload.getDescription());
        this.setName(payload.getName());
        this.setEmployees(payload.getEmployees());
        this.setOrganizations(payload.getOrganizations());
        this.setPath(payload.getPath());
        this.setFree_access(payload.isFree_access());
        this.setTransaction(payload.getTransaction());
        this.setType(payload.getType());

    }

    public static class Builder
    {
        private int document_id;
        private String name;
        private String description;
        private boolean free_access;
        private String path;
        private String type;
        private List<Employee> employees;
        private List<Organization> organizations;
        private Transaction transaction;

        public Builder setTransaction(Transaction transaction) {
            this.transaction = transaction;
            return this;
        }

        public Builder setEmployees(List<Employee> employees) {
            this.employees = employees;
            return this;
        }

        public Builder setOrganizations(List<Organization> organizations) {
            this.organizations = organizations;
            return this;
        }

        public Builder setDocument_id(int document_id) {
            this.document_id = document_id;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setFree_access(boolean free_access) {
            this.free_access = free_access;
            return this;
        }

        public Builder setPath(String path) {
            this.path = path;
            return this;
        }

        public Builder setType(String type) {
            this.type = type;
            return this;
        }

        public Document build()
        {
            return new Document(document_id, name, description, free_access, path, type, employees, organizations, transaction);
        }
    }




}
