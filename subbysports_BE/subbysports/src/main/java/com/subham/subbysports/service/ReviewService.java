package com.subham.subbysports.service;

import com.subham.subbysports.exception.ReviewNotFoundException;
import com.subham.subbysports.model.Product;
import com.subham.subbysports.model.Review;
import com.subham.subbysports.model.User;
import com.subham.subbysports.request.CreateReviewRequest;

import javax.naming.AuthenticationException;
import java.util.List;

public interface ReviewService {

    Review createReview(CreateReviewRequest req,
                        User user,
                        Product product);

    List<Review> getReviewsByProductId(Long productId);

    Review updateReview(Long reviewId,
                        String reviewText,
                        double rating,
                        Long userId) throws ReviewNotFoundException, AuthenticationException;


    void deleteReview(Long reviewId, Long userId) throws ReviewNotFoundException, AuthenticationException;

}
