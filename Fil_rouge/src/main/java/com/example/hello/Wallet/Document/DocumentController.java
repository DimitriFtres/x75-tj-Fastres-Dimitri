package com.example.hello.Wallet.Document;

import com.example.hello.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("document")
public class DocumentController {
    private String BASE_CODE = "api.document";

    @Autowired
    DocumentRepository documentRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true,documentRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, documentRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody DocumentCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Document document = new Document.Builder()
                        .setName(payload.getName())
                        .setDescription(payload.getDescription())
                        .setFree_access(payload.isFree_access())
                        .setPath(payload.getPath())
                        .setType(payload.getType())
                        .setEmployees(payload.getEmployees())
                        .setTransaction(payload.getTransaction())
                        .setOrganizations(payload.getOrganizations()).build();
                Document newdocument = documentRepository.save(document);
                return new ApiResponse(true, newdocument, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody DocumentUpdatePayload payload) {
        Document document = documentRepository.findById(payload.getDocument_id());
        if(document != null){
            Document newDocument = new Document(payload);
            Document freshDocument = documentRepository.save(newDocument);
            return new ApiResponse(true, freshDocument, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Document documentToDelete = documentRepository.findById(id);
    if(documentToDelete != null){
            documentRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
