package com.example.hello.Org_Empl.Organization;

import com.example.hello.Common.ApiResponse;
import com.example.hello.Org_Empl.Address.Address;
import com.example.hello.Org_Empl.Address.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("organization")
public class OrganizationController {
    private String BASE_CODE = "api.organization";

    @Autowired
    OrganizationRepository organizationRepository;
    @Autowired
    AddressRepository addressRepository;

    @GetMapping("/list")
    public ApiResponse getList(){
        return new ApiResponse(true, organizationRepository.findAll().stream().distinct(), BASE_CODE);
    }

    @GetMapping("/detail/{id}")
    public ApiResponse getOrganization(@PathVariable int id){
        return new ApiResponse(true, organizationRepository.findById(id), BASE_CODE);
    }

    @PostMapping("/create")
    public ApiResponse createOrganization(@RequestBody OrganizationCreatePayload payload)
    {
        Organization organization = new Organization.Builder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setActif(payload.isActif())
                .build();
        Organization newOrganization = organizationRepository.save(organization);
        payload.getAddresses().forEach(address -> {
            Address addressUpdate = addressRepository.findById(address.getAddress_id());
            if(addressUpdate != null)
            {
                Address newAddress = address;
                newAddress.setOrganization(newOrganization);
                Address freshAddress = addressRepository.save(newAddress);
            }
        });
        newOrganization.setAddresses(payload.getAddresses());
        organizationRepository.save(newOrganization);
        return new ApiResponse(true, newOrganization, BASE_CODE);
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody OrganizationUpdatePayload payload) {
        Organization organization = organizationRepository.findById(payload.getOrganization_id());
        if(organization != null){
            Organization newOrganization = new Organization(payload);
            Organization freshOrganization = organizationRepository.save(newOrganization);
            return new ApiResponse(true, freshOrganization, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Organization organizationToDelete = organizationRepository.findById(id);
        if(organizationToDelete != null){
            addressRepository.deleteAll(organizationToDelete.getAddresses());
            organizationRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }
}
