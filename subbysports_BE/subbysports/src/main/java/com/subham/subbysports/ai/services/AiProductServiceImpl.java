package com.subham.subbysports.ai.services;


import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;

@Service
public class AiProductServiceImpl implements AiProductService {

    @Value("AIzaSyBMSZbsL1-HrC1HmmUl1tWp6dcXKqwgTJ8")
    private static String API_KEY;


    @Override
    public String simpleChat(String prompt) {
        return "";
    }
}
