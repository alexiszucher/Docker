package com.azucher.user.infrastructure.api;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface UserResponseHttp {
    @JsonProperty
    String firstname();

    @JsonProperty
    String lastname();
}
