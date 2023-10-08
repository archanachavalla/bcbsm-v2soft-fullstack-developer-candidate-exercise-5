package com.demo.userApi.user;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getHello(){
        return "Hello World!";
    }

    @GetMapping("/{username}")
    public UserDTO getUser(@PathVariable String username) throws Exception {
        return userService.getUser(username);
    }
}
