package com.example.contactbookback.contact;

import com.example.contactbookback.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("contact")
public class ContactController {
    private String BASE_CODE = "api.account";

    @Autowired
    ContactRepository contactRepository;





    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, contactRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, contactRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody ContactCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Contact contact = new Contact.Builder()
                        .setFirstname(payload.getFirstname())
                        .setName(payload.getName())
                        .setAdress(payload.getAdress())
                        .setEmail(payload.getEmail()).build();
                Contact newContact = contactRepository.save(contact);
                return new ApiResponse(true, newContact, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody ContactUpdatePayload payload) {
        Contact contact = contactRepository.findById(payload.getId());
        if(contact != null){
            Contact newContact = new Contact(payload);
            Contact freshContact = contactRepository.save(newContact);
            return new ApiResponse(true, freshContact, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Contact contactToDelete = contactRepository.findById(id);
    if(contactToDelete != null){
            contactRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
