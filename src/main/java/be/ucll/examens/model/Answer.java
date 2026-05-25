package be.ucll.examens.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "option_id")
    private Option correctOption;


    // constructors

    public Answer() {
    }


    //gevulde constructor

    public Answer(Long id, Question question, Option correctOption) {
        this.id = id;
        this.question = question;
        this.correctOption = correctOption;
    }


    // getters en setters

    public Long getId() {
        return id;
    }

    public Question getQuestion() {
        return question;
    }

    public Option getCorrectOption() {
        return correctOption;
    }

    // setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public void setCorrectOption(Option correctOption) {
        this.correctOption = correctOption;
    }
}