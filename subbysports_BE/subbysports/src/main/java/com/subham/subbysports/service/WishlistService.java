package com.subham.subbysports.service;


import com.subham.subbysports.exception.WishlistNotFoundException;
import com.subham.subbysports.model.Product;
import com.subham.subbysports.model.User;
import com.subham.subbysports.model.Wishlist;

public interface WishlistService {

    Wishlist createWishlist(User user);

    Wishlist getWishlistByUserId(User user);

    Wishlist addProductToWishlist(User user, Product product) throws WishlistNotFoundException;

}

