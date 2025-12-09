package com.subham.subbysports.service;

import com.subham.subbysports.exception.SellerException;
import com.subham.subbysports.exception.UserException;
import com.subham.subbysports.request.LoginRequest;
import com.subham.subbysports.request.SignupRequest;
import com.subham.subbysports.response.AuthResponse;
import jakarta.mail.MessagingException;

public interface AuthService {

    void sentLoginOtp(String email) throws UserException, MessagingException;
    String createUser(SignupRequest req) throws SellerException;
    AuthResponse signin(LoginRequest req) throws SellerException;

}
