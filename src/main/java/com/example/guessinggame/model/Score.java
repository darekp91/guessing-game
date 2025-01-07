package com.example.guessinggame.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private int score;
    private String difficulty;

    // Konstruktor bezargumentowy (wymagany przez JPA)
    public Score() {}

    // Konstruktor z parametrami
    public Score(String username, int score, String difficulty) {
        this.username = username;
        this.score = score;
        this.difficulty = difficulty;
    }

    // Gettery i Settery
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

    @Override
    public String toString() {
        return "Score{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", score=" + score +
                ", difficulty='" + difficulty + '\'' +
                '}';
    }
}
