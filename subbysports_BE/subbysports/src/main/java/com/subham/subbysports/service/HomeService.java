package com.subham.subbysports.service;

import com.subham.subbysports.model.Home;
import com.subham.subbysports.model.HomeCategory;

import java.util.List;

public interface HomeService {

    Home creatHomePageData(List<HomeCategory> categories);

}
