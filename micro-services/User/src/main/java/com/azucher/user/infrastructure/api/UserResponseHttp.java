package com.azucher.user.infrastructure.api;

public class UserResponseHttp {
    public String firstname;
    public String lastname;

    public UserResponseHttp(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
