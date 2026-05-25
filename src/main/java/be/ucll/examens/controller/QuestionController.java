package be.ucll.examens.controller;

import be.ucll.examens.model.Question;
import be.ucll.examens.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // GET /api/questions → alle vragen zonder antwoorden
    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    // GET /api/questions/{id} → één vraag zonder antwoord
    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable Long id) {
        return questionService.getQuestionById(id);
    }

    // POST /api/questions/{id}/check → antwoord controleren
    @PostMapping("/{id}/check")
    public Map<String, Object> checkAnswer(@PathVariable Long id, @RequestBody List<Long> optionIds) {
        return questionService.checkAnswer(id, optionIds);
    }
}
