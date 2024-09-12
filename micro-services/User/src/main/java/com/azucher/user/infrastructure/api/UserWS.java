package com.azucher.user.infrastructure.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/users")
public class UserWS {

    @GetMapping
    public ResponseEntity<Set<UserResponseHttp>> getUsers() {
        Set<UserResponseHttp> users = new HashSet<>();
        users.add(new UserResponseHttp("John", "Doe"));
        users.add(new UserResponseHttp("Jane", "Doe"));
        return ResponseEntity.ok(users);
    }

}
