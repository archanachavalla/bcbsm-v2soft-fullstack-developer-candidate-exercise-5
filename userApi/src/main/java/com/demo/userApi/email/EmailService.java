package com.demo.userApi.email;

import jakarta.mail.MessagingException;

public interface EmailService {
    void sendEmail(EmailDTO email);
    void sendEmailWithAttachment(EmailDTO email) throws MessagingException;

}

