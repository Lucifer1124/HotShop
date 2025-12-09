package com.subham.subbysports.repository;

import com.subham.subbysports.domain.AccountStatus;
import com.subham.subbysports.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends JpaRepository<Seller,Long> {

    Seller findByEmail(String email);
    List<Seller> findByAccountStatus(AccountStatus status);
}
