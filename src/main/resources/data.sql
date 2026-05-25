-- Auto-generated SQL for ExamPractice
-- Truncate existing data
TRUNCATE TABLE answers, options, questions RESTART IDENTITY CASCADE;

INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (1, 'Given the following Spring Boot controller method for handling POST requests, what does the ''@Valid'' annotation in the method signature check?', '@PostMapping("/pony")
public Pony addPony(@Valid @RequestBody Pony pony) {
    return ponyService.addPony(pony);
}', '@Valid triggers Bean Validation on the annotated parameter. It checks that the incoming Pony object satisfies constraint annotations declared on its fields (e.g. @NotNull, @Size, @Min). If any constraint is violated, Spring throws a MethodArgumentNotValidException before the method body executes.', false);
INSERT INTO options (id, text, question_id) VALUES (1, 'Whether the transmitted ''Pony'' object matches the database structure without violating integrity rules', 1);
INSERT INTO options (id, text, question_id) VALUES (2, 'Whether the ''Pony'' object meets the validation rules specified in its class', 1);
INSERT INTO options (id, text, question_id) VALUES (3, 'Whether the JSON of the request body matches the structure and field types defined in Pony.java', 1);
INSERT INTO options (id, text, question_id) VALUES (4, 'Whether the request has a valid Content-Type header corresponding to ''application/json''', 1);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (2, 'Fill in the missing annotations to correctly handle RuntimeExceptions and to return an HTTP status code of 400.', '[___1___]({RuntimeException.class})
[___2___](HttpStatus.BAD_REQUEST)
public Map handleException(RuntimeException ex) {
    Map errors = new HashMap<>();
    errors.put(ex.getField(), ex.getMessage());
    return errors;
}', '@ExceptionHandler({RuntimeException.class}) tells Spring which exception type(s) this method should handle. @ResponseStatus(HttpStatus.BAD_REQUEST) sets the HTTP response code to 400 (Bad Request) when this handler is invoked.', false);
INSERT INTO options (id, text, question_id) VALUES (5, '@ControllerAdvice / @ResponseBody', 2);
INSERT INTO options (id, text, question_id) VALUES (6, '@ExceptionHandler / @ResponseStatus', 2);
INSERT INTO options (id, text, question_id) VALUES (7, '@HandleException / @HttpStatus', 2);
INSERT INTO options (id, text, question_id) VALUES (8, '@CatchException / @StatusCode', 2);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (3, 'Why is it important to write unit tests? (Select all valid reasons)', NULL, 'Unit tests catch regressions (1), improve code design (2), and enable early bug detection (4). They do NOT directly improve runtime performance, and they do NOT replace manual/integration testing.', true);
INSERT INTO options (id, text, question_id) VALUES (9, 'Unit tests help with ensuring that new functionalities do not break existing functionalities', 3);
INSERT INTO options (id, text, question_id) VALUES (10, 'Writing unit tests forces the developer to think about code structure and design, which can lead to better designed and more maintainable code', 3);
INSERT INTO options (id, text, question_id) VALUES (11, 'Unit tests can directly improve application performance in production', 3);
INSERT INTO options (id, text, question_id) VALUES (12, 'Unit tests help in early detection of bugs and problems, reducing troubleshooting costs', 3);
INSERT INTO options (id, text, question_id) VALUES (13, 'Unit tests completely replace the need for manual testing', 3);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (4, 'Given the code below that tests whether ponies are removed correctly. What is missing from this test?', '@Test
public void given3Ponies_whenRemovingPonyByName_thenPonyIsRemovedCorrectly() {
    List ponies = new ArrayList<>();
    ponies.add(new Pony("Fearless Hero"));
    ponies.add(new Pony("Twilight Sparkle"));
    ponies.add(new Pony("Rainbow Dash"));
    ponyRepository.setPonies(ponies);

    ponyService.deletePony("Twilight Sparkle");

    assertFalse(ponyRepository.allPonies().contains(new Pony("Twilight Sparkle")));
}', 'The test only checks that Twilight Sparkle is no longer in the list, but does not verify that the list size was reduced by one. A missing assertEquals(2, ponyRepository.allPonies().size()) would cover this gap.', false);
INSERT INTO options (id, text, question_id) VALUES (14, 'Checking whether the deletePony method changes the order of ponies in the list after deletion', 4);
INSERT INTO options (id, text, question_id) VALUES (15, 'Checking whether the deletePony method throws an exception when the name is not found', 4);
INSERT INTO options (id, text, question_id) VALUES (16, 'Checking whether the size of the ponies list is reduced by one after removing a pony', 4);
INSERT INTO options (id, text, question_id) VALUES (17, 'Checking that the confirmation message is correct when the pony has been successfully removed', 4);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (5, 'Given the class below. What does this example illustrate about the use of Dependency Injection in the Spring Framework? (Select all that apply)', '@Service
public class PonyService {

    private PonyRepository ponyRepository;

    @Autowired
    public PonyService(PonyRepository ponyRepository) {
        this.ponyRepository = ponyRepository;
    }

    // ...
}', '@Service registers PonyService as a Spring bean so it can be injected elsewhere. @Autowired on the constructor tells Spring to automatically provide a PonyRepository instance — no interface or manual wiring required.', true);
INSERT INTO options (id, text, question_id) VALUES (18, 'Spring uses the ''@Service'' annotation to indicate that ''PonyService'' can be automatically injected into other components', 5);
INSERT INTO options (id, text, question_id) VALUES (19, 'Spring requires the implementation of a specific interface for each dependency that PonyService needs', 5);
INSERT INTO options (id, text, question_id) VALUES (20, 'Spring uses constructor injection, marked with ''@Autowired'', to automatically inject dependencies such as ''PonyRepository'' into the ''PonyService''', 5);
INSERT INTO options (id, text, question_id) VALUES (21, 'Spring requires all dependencies to be manually instantiated and passed to the constructor of ''PonyService'' via a configuration class', 5);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (6, 'What should the URL look like so that a PUT request arrives at the method provided below?', '@RequestMapping("/pony")
public class PonyController {

    @PutMapping("/{id}")
    public Pony updatePony(@PathVariable Long id, @RequestBody Pony pony) {
        return ponyService.updatePony(id, pony);
    }
}', '@RequestMapping("/pony") sets the base path to /pony. @PutMapping("/{id}") appends /{id}. @PathVariable means the id comes from the URL path, not a query parameter. So the full URL is /pony/{id}, e.g. /pony/42.', false);
INSERT INTO options (id, text, question_id) VALUES (22, '/pony?id={id}', 6);
INSERT INTO options (id, text, question_id) VALUES (23, '/putPony/{ponyId}', 6);
INSERT INTO options (id, text, question_id) VALUES (24, '/pony?id={id}&method=put', 6);
INSERT INTO options (id, text, question_id) VALUES (25, '/pony/{id}', 6);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (7, 'Given the following code. What output is printed to console?', 'class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Bark");
    }
}

class Application {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.sound();
    }
}', 'This is polymorphism. The variable is of type Animal, but the actual object is a Dog. Java always calls the method of the real object at runtime, so Dog''s sound() is called, printing ''Bark''.', false);
INSERT INTO options (id, text, question_id) VALUES (26, 'Bark', 7);
INSERT INTO options (id, text, question_id) VALUES (27, 'Some sound', 7);
INSERT INTO options (id, text, question_id) VALUES (28, 'Nothing, running this code will lead to a runtime error', 7);
INSERT INTO options (id, text, question_id) VALUES (29, 'Nothing, compiling this code will lead to a compilation error', 7);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (8, 'Which statement about interfaces in Java is NOT true?', NULL, 'You cannot instantiate an interface directly. The other statements are all true: a class can implement multiple interfaces, an interface is a valid variable type, and interfaces define behavioural contracts.', false);
INSERT INTO options (id, text, question_id) VALUES (30, 'Interfaces can be instantiated', 8);
INSERT INTO options (id, text, question_id) VALUES (31, 'A class can implement multiple interfaces', 8);
INSERT INTO options (id, text, question_id) VALUES (32, 'An interface is a valid type for a variable', 8);
INSERT INTO options (id, text, question_id) VALUES (33, 'Interfaces are used to define ''contracts of behaviour'' for classes to adhere to', 8);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (9, 'Which statement is true about abstract classes in Java?', NULL, 'An abstract class cannot be instantiated directly — you must subclass it. It CAN be inherited from, CAN implement interfaces, and CAN contain both abstract and concrete methods.', false);
INSERT INTO options (id, text, question_id) VALUES (34, 'An abstract class is a class that does not allow other classes to inherit from it', 9);
INSERT INTO options (id, text, question_id) VALUES (35, 'An abstract class is a class that cannot implement interfaces', 9);
INSERT INTO options (id, text, question_id) VALUES (36, 'An abstract class is a class that can only contain abstract methods', 9);
INSERT INTO options (id, text, question_id) VALUES (37, 'An abstract class is a class that cannot be instantiated', 9);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (10, 'Given the following code. Which statement is correct?', 'int[] myArray = {1, 2, 3};
List<Integer> myList = new ArrayList<>();', 'ArrayList (myList) can dynamically grow and shrink, making it more flexible. An array has a fixed size after initialisation. List<Integer> only accepts Integers due to generics.', false);
INSERT INTO options (id, text, question_id) VALUES (38, 'myList can contain elements of different types', 10);
INSERT INTO options (id, text, question_id) VALUES (39, 'myArray and myList can both change size dynamically', 10);
INSERT INTO options (id, text, question_id) VALUES (40, 'myList offers more flexibility in adding and removing elements', 10);
INSERT INTO options (id, text, question_id) VALUES (41, 'It is possible to add an extra element to myArray directly after initialisation', 10);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (11, 'What happens when an unhandled unchecked exception occurs in a program?', NULL, 'Unchecked exceptions do NOT require a try-catch — the code compiles fine. But if they occur at runtime and are unhandled, the program crashes and prints the stack trace to the console.', false);
INSERT INTO options (id, text, question_id) VALUES (42, 'The program does not even compile since you needed to put a try...catch block in the code', 11);
INSERT INTO options (id, text, question_id) VALUES (43, 'The program will ignore the exception and continue executing', 11);
INSERT INTO options (id, text, question_id) VALUES (44, 'The program asks the user to correct the mistake', 11);
INSERT INTO options (id, text, question_id) VALUES (45, 'The program stops executing and the exception is printed to console', 11);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (12, 'Given the following code. Which concept is illustrated?', 'public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}', 'Method Overloading means multiple methods with the same name but different parameters within the same class. Method Overriding is when a subclass redefines a method from the superclass with the same signature.', false);
INSERT INTO options (id, text, question_id) VALUES (46, 'Polymorphism', 12);
INSERT INTO options (id, text, question_id) VALUES (47, 'Method Overloading', 12);
INSERT INTO options (id, text, question_id) VALUES (48, 'Encapsulation', 12);
INSERT INTO options (id, text, question_id) VALUES (49, 'Method Overriding', 12);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (13, 'Given the Student class, Controller method signature and HTTP call. URL: GET localhost:8080/courses/enroll_student/1/5, Body: {name: Anna Peeters, achievedCredits: 54}. Executing this call reveals that it does not work as expected: there is no response from the server. Which statements regarding this HTTP call are correct?', NULL, 'The URL is incorrect: /api prefix is missing, the HTTP method is GET instead of POST, and id2 is incorrectly placed as a path segment (/5) instead of a query parameter (?id2=5).', false);
INSERT INTO options (id, text, question_id) VALUES (50, 'The HTTP call uses an incorrect URL', 13);
INSERT INTO options (id, text, question_id) VALUES (51, 'The HTTP call uses a correct RequestBody', 13);
INSERT INTO options (id, text, question_id) VALUES (52, 'The HTTP call uses a wrong RequestBody', 13);
INSERT INTO options (id, text, question_id) VALUES (53, 'The HTTP call uses a correct URL', 13);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (14, 'Which statements about Dependency Injection and Inversion of Control are true? (Select all that apply)', NULL, 'DI makes classes loosely coupled (correct) and Spring instantiates beans via its IoC container (correct). IoC is NOT to be avoided. Classes with DI can still be instantiated manually with ''new''.', true);
INSERT INTO options (id, text, question_id) VALUES (54, 'Inversion of Control is to be avoided, it is better to manage object creation yourself as a developer so you can thoroughly check it', 14);
INSERT INTO options (id, text, question_id) VALUES (55, 'Thanks to Dependency Injection, our classes are more ''loosely coupled'' than without applying this technique', 14);
INSERT INTO options (id, text, question_id) VALUES (56, 'Dependency Injection causes Spring to instantiate our classes', 14);
INSERT INTO options (id, text, question_id) VALUES (57, 'Using Dependency Injection makes it so that our classes are unusable without Spring', 14);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (15, 'Complete the annotations so that the endpoint is correctly defined. Fill in one annotation for each entry field. @DeleteMapping(''/students/{name}'') public void deleteStudentsByNameAndAge([___1___] String studentName, [___2___] int age)', '@RestController
@RequestMapping("/api")
public class Controller {

    @DeleteMapping("/students/{name}")
    public void deleteStudentsByNameAndAge(
            [___1___] String studentName,

            [___2___] int age) {

        // ...
    }
}', 'The parameter name ''studentName'' differs from ''{name}'', so @PathVariable(value = "name") is required. ''age'' is a simple primitive passed as a query parameter, so @RequestParam is correct.', false);
INSERT INTO options (id, text, question_id) VALUES (58, '@PathVariable(value = "name") / @RequestParam', 15);
INSERT INTO options (id, text, question_id) VALUES (59, '@PathVariable("name") / @RequestParam', 15);
INSERT INTO options (id, text, question_id) VALUES (60, '@PathVariable / @RequestBody', 15);
INSERT INTO options (id, text, question_id) VALUES (61, '@RequestParam / @PathVariable', 15);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (16, 'Given the Student class, Controller method signature and HTTP call. URL: GET localhost:8080/courses/enroll_student/1?id1=5, Body: {name: Anna Peeters, credits: 54}. Executing this call reveals that it does not work as expected. Which statements regarding this HTTP call are correct?', NULL, 'The URL is incorrect: /api prefix is missing and the method is GET instead of POST. The RequestBody is correct — ''name'' and ''credits'' match the Student class fields.', false);
INSERT INTO options (id, text, question_id) VALUES (62, 'The HTTP call uses a correct RequestBody', 16);
INSERT INTO options (id, text, question_id) VALUES (63, 'The HTTP call uses an incorrect URL', 16);
INSERT INTO options (id, text, question_id) VALUES (64, 'The HTTP call uses a correct URL', 16);
INSERT INTO options (id, text, question_id) VALUES (65, 'The HTTP call uses a wrong RequestBody', 16);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (17, 'According to what pattern is our backend built?', NULL, 'A Spring Boot backend is built according to the Layered Architecture Pattern: Controller → Service → Repository. Each layer has one responsibility and only communicates with the layer below it.', false);
INSERT INTO options (id, text, question_id) VALUES (66, 'Model-View-Controller Pattern', 17);
INSERT INTO options (id, text, question_id) VALUES (67, 'Client Server Pattern', 17);
INSERT INTO options (id, text, question_id) VALUES (68, 'Layered Architecture Pattern', 17);
INSERT INTO options (id, text, question_id) VALUES (69, 'REST Pattern', 17);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (18, 'Which statements about the code below are NOT true? (Select all that apply)', '@Service
public class StudentService {
    // ...
}

@RestController
@RequestMapping("/student")
public class StudentController {

    private StudentService studentService;

    @Autowired
    private StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // ...
}', 'All 4 are false: (1) You can still use ''new''. (2) Annotations are required. (3) @Autowired is optional on a single constructor since Spring 4.3. (4) This is Dependency Injection, not polymorphism.', true);
INSERT INTO options (id, text, question_id) VALUES (70, 'Thanks to @Service and @Autowired, Spring can work with these classes. As a result, it is no longer possible to create an instance of these classes yourself via ''new''.', 18);
INSERT INTO options (id, text, question_id) VALUES (71, 'All these annotations are redundant, with simple code like this, Spring does not need any annotations at all.', 18);
INSERT INTO options (id, text, question_id) VALUES (72, 'It''s good that @Autowired is written above the constructor, without @Autowired this code would no longer work.', 18);
INSERT INTO options (id, text, question_id) VALUES (73, 'Thanks to @Service and @Autowired, Spring can inject an instance of the StudentService into the StudentController. This is an example of polymorphism.', 18);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (19, 'What happens if multiple constructors have an @Autowired annotation?', '@Autowired
private StudentController(StudentService studentService) {
    this.studentService = studentService;
}

@Autowired
private StudentController(StudentService studentService, TeacherService teacherService) {
    this.studentService = studentService;
    this.teacherService = teacherService;
}

@Autowired
private StudentController(TeacherService teacherService) {
    this.teacherService = teacherService;
}', 'When multiple constructors are annotated with @Autowired, Spring throws an error on startup because it cannot determine which constructor to use.', false);
INSERT INTO options (id, text, question_id) VALUES (74, 'Spring throws an error message on startup because it is not clear which constructor to use.', 19);
INSERT INTO options (id, text, question_id) VALUES (75, 'Spring always uses the first constructor marked @Autowired, the other constructors are ignored.', 19);
INSERT INTO options (id, text, question_id) VALUES (76, 'Depending on which other classes are present, Spring will choose the appropriate constructor.', 19);
INSERT INTO options (id, text, question_id) VALUES (77, 'Spring randomly chooses one of the constructors on start-up. Therefore, it''s better not to do this because your application will become unpredictable.', 19);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (20, 'What happens in Spring if no class is found for a dependency to be filled via @Autowired?', NULL, 'Spring throws a NoSuchBeanDefinitionException at startup when a required @Autowired dependency cannot be found. You can use @Autowired(required = false) to allow null instead.', false);
INSERT INTO options (id, text, question_id) VALUES (78, 'Spring defines its own class to inject', 20);
INSERT INTO options (id, text, question_id) VALUES (79, 'The dependency remains ''null''', 20);
INSERT INTO options (id, text, question_id) VALUES (80, 'An exception is thrown', 20);
INSERT INTO options (id, text, question_id) VALUES (81, 'The class is ignored by Spring', 20);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (21, 'Complete the annotations so that the endpoint is correctly defined. Fill in one annotation for each entry field. @PutMapping(''/students/{id}'') public void updateStudent([___1___] Long studentId, [___2___] [___3___] Student studentData)', '@RestController
@RequestMapping("/api")
public class Controller {

    @PutMapping("/students/{id}")
    public void updateStudent(
            [___1___] Long studentId,

            [___2___] [___3___] Student studentData) {

        // ...
    }
}', 'Field 1: @PathVariable("id") because ''studentId'' differs from ''{id}''. Field 2: @Valid to trigger bean validation. Field 3: @RequestBody to bind the JSON. The correct order is @Valid @RequestBody Student.', false);
INSERT INTO options (id, text, question_id) VALUES (82, '@PathVariable("id") / @Valid / @RequestBody', 21);
INSERT INTO options (id, text, question_id) VALUES (83, '@PathVariable("id") / @RequestBody / @Valid', 21);
INSERT INTO options (id, text, question_id) VALUES (84, '@PathVariable / @RequestBody / @Valid', 21);
INSERT INTO options (id, text, question_id) VALUES (85, '@RequestParam("id") / @RequestBody / @Valid', 21);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (22, 'Given the Student class, Controller method signature and HTTP call. URL: GET localhost:8080/courses/enroll_student/1?id2=5, Body: {name: Anna Peeters, achievedCredits: 54}. Executing this call reveals that it does not work as expected. Which statements regarding this HTTP call are correct?', NULL, 'The URL is incorrect: /api prefix is missing and GET is used instead of POST. The body also uses ''achievedCredits'' instead of ''credits'', making the RequestBody wrong too.', false);
INSERT INTO options (id, text, question_id) VALUES (86, 'The HTTP call uses a correct URL', 22);
INSERT INTO options (id, text, question_id) VALUES (87, 'The HTTP call uses an incorrect URL', 22);
INSERT INTO options (id, text, question_id) VALUES (88, 'The HTTP call uses a wrong RequestBody', 22);
INSERT INTO options (id, text, question_id) VALUES (89, 'The HTTP call uses a correct RequestBody', 22);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (23, 'What is polymorphism in Java?', NULL, 'Polymorphism means an object is simultaneously an instance of its own class and all its superclasses. This is NOT multiple inheritance, method overloading, or multiple constructors.', false);
INSERT INTO options (id, text, question_id) VALUES (90, 'The possibility of an object to inherit from multiple super classes', 23);
INSERT INTO options (id, text, question_id) VALUES (91, 'The possibility of an object to be an instance of its own class and of all the super-classes of that class at the same time', 23);
INSERT INTO options (id, text, question_id) VALUES (92, 'The possibility of an object to define multiple methods with the same name but with different arguments', 23);
INSERT INTO options (id, text, question_id) VALUES (93, 'The possibility of an object to have multiple constructors', 23);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (24, 'What is the output of the code below? (Foo obj1 = new Foo(); Foo obj2 = obj1; obj2 = change(obj2); change(obj1);)', 'public static Foo change(Foo obj) {
    obj.a = obj.a + 20;
    obj.text = "Goodbye";
    return obj;
}

// Foo constructor: a=10, text="Hello"', 'obj2 = obj1 does NOT create a copy — both point to the same object. After change(obj2): a=30. After change(obj1): a=50. Both variables point to the same object so both print a=50, text=Goodbye.', false);
INSERT INTO options (id, text, question_id) VALUES (94, 'values of obj1: a=50, text=Goodbye / values of obj2: a=50, text=Goodbye', 24);
INSERT INTO options (id, text, question_id) VALUES (95, 'values of obj1: a=50, text=Goodbye / values of obj2: a=10, text=Hello', 24);
INSERT INTO options (id, text, question_id) VALUES (96, 'values of obj1: a=10, text=Hello / values of obj2: a=50, text=Goodbye', 24);
INSERT INTO options (id, text, question_id) VALUES (97, 'values of obj1: a=10, text=Hello / values of obj2: a=10, text=Hello', 24);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (25, 'In which of the actions listed below is Maven NOT involved?', NULL, 'Runtime errors are shown by the JVM during execution — Maven is already done at that point. Maven IS involved in running tests, providing project structure, and loading dependencies via pom.xml.', false);
INSERT INTO options (id, text, question_id) VALUES (98, 'Executing your tests', 25);
INSERT INTO options (id, text, question_id) VALUES (99, 'Showing runtime errors when you start your application', 25);
INSERT INTO options (id, text, question_id) VALUES (100, 'Providing a default project structure for all your project files', 25);
INSERT INTO options (id, text, question_id) VALUES (101, 'Loading in an external library that you want to use in your backend', 25);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (26, 'What characterises an unchecked exception?', NULL, 'Unchecked exceptions (like NullPointerException) do not require handling — the compiler does not force you to catch them or declare them. Checked exceptions (like IOException) DO require handling.', false);
INSERT INTO options (id, text, question_id) VALUES (102, 'An unchecked exception points to a fundamental flaw in your program that makes it crash, for example a lack of working memory for the program', 26);
INSERT INTO options (id, text, question_id) VALUES (103, 'An unchecked exception can only be handled via a try-catch block, you can not add it to the method signature', 26);
INSERT INTO options (id, text, question_id) VALUES (104, 'An unchecked exception does not need to be handled via a try-catch block or by adding it to the method signature', 26);
INSERT INTO options (id, text, question_id) VALUES (105, 'An unchecked exception must be handled via a try-catch block or by adding it to the method signature', 26);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (27, 'What is the output of the code below? (str starts as ''a'', method a() calls b() which calls c())', 'class Foo {
    private String str = "a";

    public void a() {
        try {
            str = str + "b";
            b();
        } catch (IllegalArgumentException e) {
            str = str + "c";
        } catch (Exception e) {
            str = str + "d";
        }
    }

    public void b() throws IllegalArgumentException {
        try {
            str = str + "e";
            c();
        } catch (Exception e) {
            throw new IllegalArgumentException();
        } finally {
            str = str + "f";
        }
        str = str + "g";
    }

    public void c() throws Exception {
        throw new Exception();
    }
}', 'str starts as ''a''. a() adds ''b''. b() adds ''e''. c() throws Exception, caught in b() which throws IllegalArgumentException. finally always runs → adds ''f''. Back in a(), IllegalArgumentException caught → adds ''c''. Result: abefc.', false);
INSERT INTO options (id, text, question_id) VALUES (106, 'abec', 27);
INSERT INTO options (id, text, question_id) VALUES (107, 'abe', 27);
INSERT INTO options (id, text, question_id) VALUES (108, 'abefc', 27);
INSERT INTO options (id, text, question_id) VALUES (109, 'abefd', 27);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (28, 'Which statement about inheritance is NOT true?', NULL, 'Java does NOT support multiple class inheritance. You CAN implement multiple interfaces. Interfaces can extend interfaces. All classes ultimately extend Object. You can use ''final'' to prevent inheritance.', false);
INSERT INTO options (id, text, question_id) VALUES (110, 'An interface can inherit from an interface', 28);
INSERT INTO options (id, text, question_id) VALUES (111, 'You can disallow inheritance from classes that you write yourself', 28);
INSERT INTO options (id, text, question_id) VALUES (112, 'All classes inherit, directly or indirectly, from the class Object', 28);
INSERT INTO options (id, text, question_id) VALUES (113, 'You can inherit from multiple classes in Java', 28);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (29, 'What is the output of the code below? (Base b = new Derived(); b.foo();)', 'class Base {
    public Base() { System.out.print("0"); }
    public void foo() { bar(); System.out.print("1"); }
    public void bar() { System.out.print("2"); }
}

class Derived extends Base {
    public void foo() { super.foo(); System.out.print("3"); }
    public void bar() { System.out.print("4"); }
}', 'new Derived() calls Base constructor → ''0''. b.foo() calls Derived.foo(). super.foo() calls Base.foo() which calls bar() — overridden in Derived → ''4''. Base.foo() prints ''1''. Derived.foo() prints ''3''. Result: 0413.', false);
INSERT INTO options (id, text, question_id) VALUES (114, '213', 29);
INSERT INTO options (id, text, question_id) VALUES (115, '413', 29);
INSERT INTO options (id, text, question_id) VALUES (116, '0213', 29);
INSERT INTO options (id, text, question_id) VALUES (117, '0413', 29);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (30, 'Which statement about static methods is true?', NULL, 'Static methods belong to the class itself, not an instance. You call them via the class name (e.g. Math.random()). They cannot access non-static fields or call non-static methods without creating an instance first.', false);
INSERT INTO options (id, text, question_id) VALUES (118, 'A static method belongs to an instance of the class it is defined on', 30);
INSERT INTO options (id, text, question_id) VALUES (119, 'A static method can access fields of objects of the class it is defined on', 30);
INSERT INTO options (id, text, question_id) VALUES (120, 'A static method can be called without making an instance of the class it is defined on', 30);
INSERT INTO options (id, text, question_id) VALUES (121, 'A static method can call non-static methods', 30);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (31, 'What is the output of the code below? (long[] a1 = {3,4,5}; long[] a2 = fix(a1);)', 'class Foo {
    public void start() {
        long[] a1 = {3, 4, 5};
        long[] a2 = fix(a1);
        System.out.print(a1[1] + a2[0] + a2[1]);
    }

    private long[] fix(long[] a) {
        a[1] = 7;
        return a;
    }
}', 'a2 = fix(a1) does NOT create a copy — a2 points to the same array as a1. fix sets a[1]=7, so a1={3,7,5} and a2={3,7,5}. Then a1[1]+a2[0]+a2[1] = 7+3+7 = 17.', false);
INSERT INTO options (id, text, question_id) VALUES (122, '21', 31);
INSERT INTO options (id, text, question_id) VALUES (123, '14', 31);
INSERT INTO options (id, text, question_id) VALUES (124, '11', 31);
INSERT INTO options (id, text, question_id) VALUES (125, '17', 31);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (32, 'What characterises a checked exception?', NULL, 'Checked exceptions (like IOException) MUST be handled — either with try-catch or by declaring them in the method signature with ''throws''. The compiler enforces this.', false);
INSERT INTO options (id, text, question_id) VALUES (126, 'A checked exception does not need to be handled via a try-catch block or by adding it to the method signature', 32);
INSERT INTO options (id, text, question_id) VALUES (127, 'A checked exception must be handled via a try-catch block or by adding it to the method signature', 32);
INSERT INTO options (id, text, question_id) VALUES (128, 'A checked exception points to a fundamental flaw in your program that makes it crash, for example a lack of working memory for the program', 32);
INSERT INTO options (id, text, question_id) VALUES (129, 'A checked exception can only be handled via a try-catch block, you can not add it to the method signature', 32);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (33, 'What is the output of the code below? (Base b = new Derived(); b.foo();)', 'class Base {
    public void foo() { System.out.print("1"); }
    public void bar() { System.out.print("2"); }
}

class Derived extends Base {
    public Derived() { System.out.print("3"); }
    public void foo() { this.bar(); System.out.print("4"); }
    public void bar() { super.foo(); System.out.print("5"); }
}', 'new Derived() → ''3''. b.foo() → Derived.foo(). this.bar() → Derived.bar(). super.foo() → Base.foo() → ''1''. Back in Derived.bar() → ''5''. Back in Derived.foo() → ''4''. Result: 3154.', false);
INSERT INTO options (id, text, question_id) VALUES (130, '3254', 33);
INSERT INTO options (id, text, question_id) VALUES (131, '32541', 33);
INSERT INTO options (id, text, question_id) VALUES (132, '31542', 33);
INSERT INTO options (id, text, question_id) VALUES (133, '3154', 33);
INSERT INTO questions (id, question, code, explanation, multi_select) VALUES (34, 'What is the primary use-case of interfaces in Java?', NULL, 'The primary use-case of interfaces is abstraction — by programming to an interface rather than a concrete class, you decouple your code from specific implementations.', false);
INSERT INTO options (id, text, question_id) VALUES (134, 'To allow polymorphism', 34);
INSERT INTO options (id, text, question_id) VALUES (135, 'To make sure that the program does not crash when an exception occurs', 34);
INSERT INTO options (id, text, question_id) VALUES (136, 'To provide an abstraction. By using an interface as a type the concrete implementation is no longer important.', 34);
INSERT INTO options (id, text, question_id) VALUES (137, 'To enable encapsulation', 34);

-- Answers (correct options)
INSERT INTO answers (question_id, option_id) VALUES (1, 2);
INSERT INTO answers (question_id, option_id) VALUES (2, 6);
INSERT INTO answers (question_id, option_id) VALUES (3, 9);
INSERT INTO answers (question_id, option_id) VALUES (3, 10);
INSERT INTO answers (question_id, option_id) VALUES (3, 12);
INSERT INTO answers (question_id, option_id) VALUES (4, 16);
INSERT INTO answers (question_id, option_id) VALUES (5, 18);
INSERT INTO answers (question_id, option_id) VALUES (5, 20);
INSERT INTO answers (question_id, option_id) VALUES (6, 25);
INSERT INTO answers (question_id, option_id) VALUES (7, 26);
INSERT INTO answers (question_id, option_id) VALUES (8, 30);
INSERT INTO answers (question_id, option_id) VALUES (9, 37);
INSERT INTO answers (question_id, option_id) VALUES (10, 40);
INSERT INTO answers (question_id, option_id) VALUES (11, 45);
INSERT INTO answers (question_id, option_id) VALUES (12, 47);
INSERT INTO answers (question_id, option_id) VALUES (13, 50);
INSERT INTO answers (question_id, option_id) VALUES (14, 55);
INSERT INTO answers (question_id, option_id) VALUES (14, 56);
INSERT INTO answers (question_id, option_id) VALUES (15, 58);
INSERT INTO answers (question_id, option_id) VALUES (16, 63);
INSERT INTO answers (question_id, option_id) VALUES (17, 68);
INSERT INTO answers (question_id, option_id) VALUES (18, 70);
INSERT INTO answers (question_id, option_id) VALUES (18, 71);
INSERT INTO answers (question_id, option_id) VALUES (18, 72);
INSERT INTO answers (question_id, option_id) VALUES (18, 73);
INSERT INTO answers (question_id, option_id) VALUES (19, 74);
INSERT INTO answers (question_id, option_id) VALUES (20, 80);
INSERT INTO answers (question_id, option_id) VALUES (21, 82);
INSERT INTO answers (question_id, option_id) VALUES (22, 87);
INSERT INTO answers (question_id, option_id) VALUES (23, 91);
INSERT INTO answers (question_id, option_id) VALUES (24, 94);
INSERT INTO answers (question_id, option_id) VALUES (25, 99);
INSERT INTO answers (question_id, option_id) VALUES (26, 104);
INSERT INTO answers (question_id, option_id) VALUES (27, 108);
INSERT INTO answers (question_id, option_id) VALUES (28, 113);
INSERT INTO answers (question_id, option_id) VALUES (29, 117);
INSERT INTO answers (question_id, option_id) VALUES (30, 120);
INSERT INTO answers (question_id, option_id) VALUES (31, 125);
INSERT INTO answers (question_id, option_id) VALUES (32, 127);
INSERT INTO answers (question_id, option_id) VALUES (33, 133);
INSERT INTO answers (question_id, option_id) VALUES (34, 136);

-- Reset sequences
SELECT setval('questions_id_seq', 34);
SELECT setval('options_id_seq', 137);
SELECT setval('answers_id_seq', 41);