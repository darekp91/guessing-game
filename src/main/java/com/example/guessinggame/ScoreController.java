package com.example.guessinggame;

import com.example.guessinggame.model.Score;
import com.example.guessinggame.repository.ScoreRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    private final ScoreRepository scoreRepository;

    public ScoreController(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }

    // Endpoint do zapisu wyniku
    @PostMapping
    public String saveScore(@RequestBody ScoreRequest request) {
        Score score = new Score(request.username, request.score, request.difficulty);
        score.setDate(LocalDateTime.now()); // Automatyczne ustawienie daty
        scoreRepository.save(score);
        return "Wynik zapisany!";
    }

    // Endpoint do pobierania wszystkich wyników
    @GetMapping
    public List<Score> getAllScores() {
        return scoreRepository.findAll();
    }

    // Endpoint do filtrowania wyników po użytkowniku i poziomie trudności
    @GetMapping("/filter")
    public List<Score> filterScores(
            @RequestParam String username,
            @RequestParam String difficulty,
            @RequestParam(defaultValue = "asc") String sort) {
        if (sort.equals("desc")) {
            return scoreRepository.findByUsernameAndDifficultyOrderByScoreDesc(username, difficulty);
        }
        return scoreRepository.findByUsernameAndDifficultyOrderByScoreAsc(username, difficulty);
    }

    // Klasa wewnętrzna do obsługi żądań JSON
    static class ScoreRequest {
        public String username;
        public int score;
        public String difficulty;

        @Override
        public String toString() {
            return "ScoreRequest{" +
                    "username='" + username + '\'' +
                    ", score=" + score +
                    ", difficulty='" + difficulty + '\'' +
                    '}';
        }
    }
}
