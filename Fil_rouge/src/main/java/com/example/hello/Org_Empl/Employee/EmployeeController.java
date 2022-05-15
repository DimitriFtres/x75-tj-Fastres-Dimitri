package com.example.hello.Org_Empl.Employee;

import com.example.hello.Common.ApiResponse;
import com.example.hello.Org_Empl.Address.Address;
import com.example.hello.Org_Empl.Address.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("employee")
public class EmployeeController {
    private String BASE_CODE = "api.employee";

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    AddressRepository addressRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true,employeeRepository.findAll().stream().distinct(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, employeeRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody EmployeeCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Employee employee = new Employee.Builder()
                        .setRole(payload.getRole())
                        .setAccount(payload.getAccount())
                        .setActif(payload.isActif())
                        .setOrganization(payload.getOrganization()).build();
                Employee newEmployee = employeeRepository.save(employee);
                payload.getAddresses().forEach(address -> {
                    Address addressUpdate = addressRepository.findById(address.getAddress_id());
                    if(addressUpdate != null)
                    {
                        Address newAddress = address;
                        newAddress.setEmployee(newEmployee);
                        Address freshAddress = addressRepository.save(newAddress);
                    }
                });
                newEmployee.setAddresses(payload.getAddresses());
                employeeRepository.save(newEmployee);

                return new ApiResponse(true, newEmployee, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody EmployeeUpdatePayload payload) {
        Employee employee = employeeRepository.findById(payload.getEmployee_id());
        if(employee != null){
            Employee newEmployee = new Employee(payload);
            Employee freshEmployee = employeeRepository.save(newEmployee);
            return new ApiResponse(true, freshEmployee, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Employee employeeToDelete = employeeRepository.findById(id);
        if(employeeToDelete != null){
        addressRepository.deleteAll(employeeToDelete.getAddresses());
        employeeRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
