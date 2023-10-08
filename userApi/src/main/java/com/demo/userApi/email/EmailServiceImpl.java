package com.demo.userApi.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService{

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(EmailDTO email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email.getToEmailId());
        message.setSubject("Attention!");
        message.setText("body");
        message.setFrom(email.getFromEmailId());

        mailSender.send(message);
    }

    public void sendEmailWithAttachment(EmailDTO email) throws MessagingException {

        MimeMessage message = mailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(email.getFromEmailId());
        helper.setTo(email.getToEmailId());
        helper.setSubject("Attachment");
        helper.setText("Check the attachment");

        FileSystemResource file
                = new FileSystemResource(
                        new File(email.getFilePath() + "/" + email.getFileName()));

        helper.addAttachment("FILE", file);

        mailSender.send(message);
    }
}
