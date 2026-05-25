package be.ucll.examens.service;

import be.ucll.examens.model.Answer;
import be.ucll.examens.model.Question;
import be.ucll.examens.repository.AnswerRepository;
import be.ucll.examens.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    public QuestionService(QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }

    // Geeft alle vragen terug ZONDER antwoorden
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // Geeft één vraag terug ZONDER antwoord
    public Question getQuestionById(Long id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));
    }

    // Controleert of het antwoord correct is
    public boolean checkAnswer(Long questionId, List<Long> optionIds) {
        List<Answer> correctAnswers = answerRepository.findByQuestionId(questionId);
        List<Long> correctIds = correctAnswers.stream()
                .map(a -> a.getCorrectOption().getId())
                .toList();
        return correctIds.containsAll(optionIds) && optionIds.containsAll(correctIds);
    }
}