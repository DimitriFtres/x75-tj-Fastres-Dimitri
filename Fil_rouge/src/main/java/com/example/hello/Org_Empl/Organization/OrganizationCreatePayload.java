package com.example.hello.Org_Empl.Organization;

import com.example.hello.Org_Empl.Address.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationCreatePayload {
    private String name;
    private String description;
    private boolean actif;
    private Address address;


}
