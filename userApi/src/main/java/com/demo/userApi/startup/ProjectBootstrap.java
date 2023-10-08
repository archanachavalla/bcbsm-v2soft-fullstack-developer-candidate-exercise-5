package com.demo.userApi.startup;

import com.demo.userApi.email.EmailDTO;
import com.demo.userApi.email.EmailRepository;
import com.demo.userApi.user.UserBO;
import com.demo.userApi.user.UserRepository;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import jakarta.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

@Component
public class ProjectBootstrap {

    private final EmailRepository emailRepository;
    private final UserRepository userRepository;

    public ProjectBootstrap(EmailRepository emailRepository, UserRepository userRepository) {
        this.emailRepository = emailRepository;
        this.userRepository = userRepository;
    }

    @PostConstruct
    private void init() throws IOException {
        loadEmails();
        loadUsers();
    }

    private void loadEmails() throws IOException {
        CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
        CsvMapper mapper = new CsvMapper();
        File file = new ClassPathResource("/emails.csv").getFile();
        MappingIterator<EmailDTO> readValues = mapper.readerFor(EmailDTO.class).with(bootstrapSchema).readValues(file);
        emailRepository.saveAll(readValues.readAll());
    }

    private void loadUsers() throws IOException {
        CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
        CsvMapper mapper = new CsvMapper();
        File file = new ClassPathResource("/users.csv").getFile();
        MappingIterator<UserBO> readValues = mapper.readerFor(UserBO.class).with(bootstrapSchema).readValues(file);
        userRepository.saveAll(readValues.readAll());
    }
}
