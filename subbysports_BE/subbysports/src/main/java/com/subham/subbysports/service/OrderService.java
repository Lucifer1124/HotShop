package com.subham.subbysports.service;

import com.subham.subbysports.domain.OrderStatus;
import com.subham.subbysports.exception.OrderException;
import com.subham.subbysports.model.Address;
import com.subham.subbysports.model.Cart;
import com.subham.subbysports.model.User;
import com.subham.subbysports.model.*;
import com.subham.subbysports.model.Order;

import java.util.List;
import java.util.Set;

public interface OrderService {
	
	public Set<Order> createOrder(User user, Address shippingAddress, Cart cart);
	
	public Order findOrderById(Long orderId) throws OrderException;
	
	public List<Order> usersOrderHistory(Long userId);
	
	public List<Order>getShopsOrders(Long sellerId);

	public Order updateOrderStatus(Long orderId,
								   OrderStatus orderStatus)
			throws OrderException;
	
	public void deleteOrder(Long orderId) throws OrderException;

	Order cancelOrder(Long orderId,User user) throws OrderException;
	
}
