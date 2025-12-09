package com.subham.subbysports.response;

import com.subham.subbysports.dto.OrderHistory;
import com.subham.subbysports.model.Cart;
import com.subham.subbysports.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FunctionResponse {
    private String functionName;
    private Cart userCart;
    private OrderHistory orderHistory;
    private Product product;
}
