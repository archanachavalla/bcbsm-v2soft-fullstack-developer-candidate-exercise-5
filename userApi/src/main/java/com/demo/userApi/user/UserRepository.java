package com.demo.userApi.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserBO, String> {
    UserBO findByUsername(String username);
}
