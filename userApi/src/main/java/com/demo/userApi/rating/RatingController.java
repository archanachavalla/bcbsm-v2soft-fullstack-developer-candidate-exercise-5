package com.demo.userApi.rating;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/rating")
public class RatingController {
    private final RatingRepository repository;

    public RatingController(RatingRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public void sendRating(@RequestBody RatingDTO rating) {
        repository.save(rating);
    }
}
