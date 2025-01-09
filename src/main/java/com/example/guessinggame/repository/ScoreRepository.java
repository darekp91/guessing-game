package com.example.guessinggame.repository;

import com.example.guessinggame.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.time.LocalDateTime;

public interface ScoreRepository extends JpaRepository<Score, Long> {
    List<Score> findByUsernameAndDifficulty(String username, String difficulty);
    List<Score> findByUsernameAndDifficultyOrderByScoreAsc(String username, String difficulty);
    List<Score> findByUsernameAndDifficultyOrderByScoreDesc(String username, String difficulty);
    List<Score> findByDateBetween(LocalDateTime startDate, LocalDateTime endDate);
}
