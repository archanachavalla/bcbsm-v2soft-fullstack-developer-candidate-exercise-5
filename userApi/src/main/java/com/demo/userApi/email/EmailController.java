package com.demo.userApi.email;

import jakarta.mail.MessagingException;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/email")
public class EmailController {
    private final EmailService service;

    private final EmailRepository repository;

    public EmailController(EmailService service, EmailRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @PostMapping(path = "/attachment")
    public void sendUserEmailWithAttachment(@RequestBody EmailDTO email) throws MessagingException {
        service.sendEmailWithAttachment(email);

        email.setFilePath(email.getFilePath().replace("\\", "/"));
        SimpleDateFormat df = new SimpleDateFormat("MM/dd/yyyy");
        String formatted = df.format(new Date());
        email.setUploadDate(formatted);
        repository.save(email);
    }

    @GetMapping
    public List<EmailDTO> retrieveAllEmails() {
        return repository.findAll();
    }

}
