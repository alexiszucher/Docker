package com.azucher.user.infrastructure.api;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class UserWSTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void shouldReturnUserWithStatusCode200() throws Exception {
        mvc.perform(get("/users")).andDo(MockMvcResultHandlers.print()).andExpect(status().isOk())
                .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(3)))
                .andExpect(jsonPath("$[*].firstname", Matchers.containsInAnyOrder("John", "Jane", "Jack")))
                .andExpect(jsonPath("$[*].lastname", Matchers.containsInAnyOrder("Doe", "Doe", "Done")));
    }
}