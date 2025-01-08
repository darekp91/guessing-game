package com.example.guessinggame.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private int score;
    private String difficulty;
    private LocalDateTime date;

    public Score() {}

    public Score(String username, int score, String difficulty) {
        this.username = username;
        this.score = score;
        this.difficulty = difficulty;
    }

    // Gettery i settery

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
