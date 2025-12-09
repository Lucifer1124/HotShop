package com.subham.subbysports.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text)
            throws MessagingException, MailSendException {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

            // Set sender explicitly
            helper.setFrom("puspalbiswas11gd11@gmail.com");
            helper.setTo(userEmail);
            helper.setSubject(subject);
            helper.setText(text + otp, true); // HTML format

            javaMailSender.send(mimeMessage);
        } catch (MailException e) {
            // Log the error for debugging
            System.err.println("Email send failed to " + userEmail + ": " + e.getMessage());
            throw new MailSendException("Failed to send email to " + userEmail);
        }
    }
}