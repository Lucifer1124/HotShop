package com.subham.subbysports.service;

import com.subham.subbysports.exception.ProductException;
import com.subham.subbysports.model.Cart;
import com.subham.subbysports.model.CartItem;
import com.subham.subbysports.model.Product;
import com.subham.subbysports.model.User;

public interface CartService {
	
	public CartItem addCartItem(User user,
								Product product,
								String size,
								int quantity) throws ProductException;
	
	public Cart findUserCart(User user);

}
