package com.subham.subbysports.ai.services;

import com.subham.subbysports.exception.ProductException;
import com.subham.subbysports.response.ApiResponse;

public interface AiChatBotService {

    ApiResponse aiChatBot(String prompt,Long productId,Long userId) throws ProductException;
}
