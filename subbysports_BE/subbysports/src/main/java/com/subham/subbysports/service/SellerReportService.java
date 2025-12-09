package com.subham.subbysports.service;

import com.subham.subbysports.model.Seller;
import com.subham.subbysports.model.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport( SellerReport sellerReport);

}
