package contact;

import Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("account")
public class PersonController {
    private String BASE_CODE = "api.account";

    @Autowired
    PersonRepository personRepository;





    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, personRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, personRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody PersonCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Person person = new Person.Builder()
                        .setLastname(payload.getLastname())
                        .setName(payload.getName())
                        .setGender(payload.getGender())
                        .setBirth(payload.getBirth()).build();
                Person newPerson = personRepository.save(person);
                return new ApiResponse(true, newPerson, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody PersonUpdatePayload payload) {
        Person person = personRepository.findById(payload.getId());
        if(person != null){
            Person newPerson = new Person(payload);
            Person freshPerson = personRepository.save(newPerson);
            return new ApiResponse(true, freshPerson, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Person personToDelete = personRepository.findById(id);
    if(personToDelete != null){
            personRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
