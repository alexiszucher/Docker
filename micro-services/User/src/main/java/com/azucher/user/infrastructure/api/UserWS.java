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
        users.add(buildUserHttpResponse("John", "Doe"));
        users.add(buildUserHttpResponse("Jane", "Doe"));
        users.add(buildUserHttpResponse("Jack", "Done"));
        return ResponseEntity.ok(users);
    }

    private UserResponseHttp buildUserHttpResponse(String firstName, String lastName) {
        return new UserResponseHttp() {
            @Override
            public String firstname() {
                return firstName;
            }

            @Override
            public String lastname() {
                return lastName;
            }
        };
    }

}
