package com.example.guessinggame;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    @PostMapping
    public String saveScore(@RequestBody ScoreRequest request) {
        //Tymczasowe logowanie danych w konsoli
        System.out.println("Wynik: " + request);
        return "Wynik zapisany!";
    }

    static class ScoreRequest {
        public String username;
        public int score;

        @Override
        public String toString() {
            return "Username: " + username + ", Score: " + score;
        }
    }
}
