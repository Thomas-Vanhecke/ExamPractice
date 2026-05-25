package be.ucll.examens.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "options")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String text;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;




    // constructors

    public Option() {
    }


    //gevulde constructor

    public Option(Long id, String text, Question question) {
        this.id = id;
        this.text = text;
        this.question = question;
    }


    // getters en setters


    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Question getQuestion() {
        return question;
    }

    //setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}