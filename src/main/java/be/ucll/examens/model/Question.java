package be.ucll.examens.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.BatchSize;

import java.util.List;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String question;

    @Column(columnDefinition = "TEXT")
    private String code;

    @Column(columnDefinition = "TEXT")
    private String explanation;




    private boolean multiSelect;

    @BatchSize(size = 34)
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Option> options;

    @JsonIgnore
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;



    // constructors
    public Question() {
    }


    //gevulde constructor

    public Question(Long id, String question, String code, String explanation, boolean multiSelect, List<Option> options, List<Answer> answers) {
        this.id = id;
        this.question = question;
        this.code = code;
        this.explanation = explanation;
        this.multiSelect = multiSelect;
        this.options = options;
        this.answers = answers;
    }


    // getters en setters via rechtermuisknop → Generate


    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public String getCode() {
        return code;
    }

    public String getExplanation() {
        return explanation;
    }

    public boolean isMultiSelect() {
        return multiSelect;
    }

    public List<Option> getOptions() {
        return options;
    }

    public List<Answer> getAnswers() {
        return answers;
    }


    //setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public void setMultiSelect(boolean multiSelect) {
        this.multiSelect = multiSelect;
    }

    public void setOptions(List<Option> options) {
        this.options = options;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}