package com.subham.subbysports.service;

import com.subham.subbysports.exception.CartItemException;
import com.subham.subbysports.exception.UserException;
import com.subham.subbysports.model.CartItem;


public interface CartItemService {
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
