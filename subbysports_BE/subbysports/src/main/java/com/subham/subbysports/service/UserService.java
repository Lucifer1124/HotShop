package com.subham.subbysports.service;

import com.subham.subbysports.exception.UserException;
import com.subham.subbysports.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;


}
