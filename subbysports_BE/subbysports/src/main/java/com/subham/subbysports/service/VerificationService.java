package com.subham.subbysports.service;

import com.subham.subbysports.model.VerificationCode;

public interface VerificationService {

    VerificationCode createVerificationCode(String otp, String email);
}
