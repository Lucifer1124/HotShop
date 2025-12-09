package com.subham.subbysports.service;

import com.subham.subbysports.model.Order;
import com.subham.subbysports.model.Seller;
import com.subham.subbysports.model.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySeller(Seller seller);
    List<Transaction>getAllTransactions();
}
