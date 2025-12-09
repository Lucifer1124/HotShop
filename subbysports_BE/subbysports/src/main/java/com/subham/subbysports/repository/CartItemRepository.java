package com.subham.subbysports.repository;

import com.subham.subbysports.model.Cart;
import com.subham.subbysports.model.CartItem;
import com.subham.subbysports.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);


}
