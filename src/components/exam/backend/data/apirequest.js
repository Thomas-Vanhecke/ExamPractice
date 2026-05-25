const apirequest = {
  id: "apirequest",
  title: "API-requests + Java:  Ans",
  icon: "🍃",
  color: "#6DB33F",
  accent: "#BBDF8E",
  questions: [
    // ── BASIC QUESTIONS ──────────────────────────────────────────
    {
      id: "sb_e1",
      question: "Given the following Spring Boot controller method for handling POST requests, what does the '@Valid' annotation in the method signature check?",
      code: `@PostMapping("/pony")
public Pony addPony(@Valid @RequestBody Pony pony) {
    return ponyService.addPony(pony);
}`,
      options: [
        "Whether the transmitted 'Pony' object matches the database structure without violating integrity rules",
        "Whether the 'Pony' object meets the validation rules specified in its class",
        "Whether the JSON of the request body matches the structure and field types defined in Pony.java",
        "Whether the request has a valid Content-Type header corresponding to 'application/json'",
      ],
      answer: 1,
      explanation: "@Valid triggers Bean Validation on the annotated parameter. It checks that the incoming Pony object satisfies constraint annotations declared on its fields (e.g. @NotNull, @Size, @Min). If any constraint is violated, Spring throws a MethodArgumentNotValidException before the method body executes.",
    },
    {
      id: "sb_e2",
      question: "Fill in the missing annotations to correctly handle RuntimeExceptions and to return an HTTP status code of 400.",
      code: `[___1___]({RuntimeException.class})
[___2___](HttpStatus.BAD_REQUEST)
public Map handleException(RuntimeException ex) {
    Map errors = new HashMap<>();
    errors.put(ex.getField(), ex.getMessage());
    return errors;
}`,
      options: [
        "@ControllerAdvice / @ResponseBody",
        "@ExceptionHandler / @ResponseStatus",
        "@HandleException / @HttpStatus",
        "@CatchException / @StatusCode",
      ],
      answer: 1,
      explanation: "@ExceptionHandler({RuntimeException.class}) tells Spring which exception type(s) this method should handle. @ResponseStatus(HttpStatus.BAD_REQUEST) sets the HTTP response code to 400 (Bad Request) when this handler is invoked.",
    },
    {
      id: "sb_e3",
      question: "Why is it important to write unit tests? (Select all valid reasons)",
      options: [
        "Unit tests help with ensuring that new functionalities do not break existing functionalities",
        "Writing unit tests forces the developer to think about code structure and design, which can lead to better designed and more maintainable code",
        "Unit tests can directly improve application performance in production",
        "Unit tests help in early detection of bugs and problems, reducing troubleshooting costs",
        "Unit tests completely replace the need for manual testing",
      ],
      answer: [0, 1, 3],
      multiSelect: true,
      explanation: "Unit tests catch regressions (1), improve code design (2), and enable early bug detection (4). They do NOT directly improve runtime performance, and they do NOT replace manual/integration testing.",
    },
    {
      id: "sb_e4",
      question: "Given the code below that tests whether ponies are removed correctly. What is missing from this test?",
      code: `@Test
public void given3Ponies_whenRemovingPonyByName_thenPonyIsRemovedCorrectly() {
    List ponies = new ArrayList<>();
    ponies.add(new Pony("Fearless Hero"));
    ponies.add(new Pony("Twilight Sparkle"));
    ponies.add(new Pony("Rainbow Dash"));
    ponyRepository.setPonies(ponies);

    ponyService.deletePony("Twilight Sparkle");

    assertFalse(ponyRepository.allPonies().contains(new Pony("Twilight Sparkle")));
}`,
      options: [
        "Checking whether the deletePony method changes the order of ponies in the list after deletion",
        "Checking whether the deletePony method throws an exception when the name is not found",
        "Checking whether the size of the ponies list is reduced by one after removing a pony",
        "Checking that the confirmation message is correct when the pony has been successfully removed",
      ],
      answer: 2,
      explanation: "The test only checks that Twilight Sparkle is no longer in the list, but does not verify that the list size was reduced by one. A missing assertEquals(2, ponyRepository.allPonies().size()) would cover this gap.",
    },
    {
      id: "sb_e5",
      question: "Given the class below. What does this example illustrate about the use of Dependency Injection in the Spring Framework? (Select all that apply)",
      code: `@Service
public class PonyService {

    private PonyRepository ponyRepository;

    @Autowired
    public PonyService(PonyRepository ponyRepository) {
        this.ponyRepository = ponyRepository;
    }

    // ...
}`,
      options: [
        "Spring uses the '@Service' annotation to indicate that 'PonyService' can be automatically injected into other components",
        "Spring requires the implementation of a specific interface for each dependency that PonyService needs",
        "Spring uses constructor injection, marked with '@Autowired', to automatically inject dependencies such as 'PonyRepository' into the 'PonyService'",
        "Spring requires all dependencies to be manually instantiated and passed to the constructor of 'PonyService' via a configuration class",
      ],
      answer: [0, 2],
      multiSelect: true,
      explanation: "@Service registers PonyService as a Spring bean so it can be injected elsewhere. @Autowired on the constructor tells Spring to automatically provide a PonyRepository instance — no interface or manual wiring required.",
    },
    {
      id: "sb_e6",
      question: "What should the URL look like so that a PUT request arrives at the method provided below?",
      code: `@RequestMapping("/pony")
public class PonyController {

    @PutMapping("/{id}")
    public Pony updatePony(@PathVariable Long id, @RequestBody Pony pony) {
        return ponyService.updatePony(id, pony);
    }
}`,
      options: [
        "/pony?id={id}",
        "/putPony/{ponyId}",
        "/pony?id={id}&method=put",
        "/pony/{id}",
      ],
      answer: 3,
      explanation: "@RequestMapping(\"/pony\") sets the base path to /pony. @PutMapping(\"/{id}\") appends /{id}. @PathVariable means the id comes from the URL path, not a query parameter. So the full URL is /pony/{id}, e.g. /pony/42.",
    },

    // ── JAVA BASIC QUESTIONS ──────────────────────────────────────
    {
      id: "java_1a",
      question: "Given the following code. What output is printed to console?",
      code: `class Animal {
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
}`,
      options: [
        "Bark",
        "Some sound",
        "Nothing, running this code will lead to a runtime error",
        "Nothing, compiling this code will lead to a compilation error",
      ],
      answer: 0,
      explanation: "This is polymorphism. The variable is of type Animal, but the actual object is a Dog. Java always calls the method of the real object at runtime, so Dog's sound() is called, printing 'Bark'.",
    },
    {
      id: "java_1b",
      question: "Which statement about interfaces in Java is NOT true?",
      options: [
        "Interfaces can be instantiated",
        "A class can implement multiple interfaces",
        "An interface is a valid type for a variable",
        "Interfaces are used to define \"contracts of behaviour\" for classes to adhere to",
      ],
      answer: 0,
      explanation: "You cannot instantiate an interface directly. The other statements are all true: a class can implement multiple interfaces, an interface is a valid variable type, and interfaces define behavioural contracts.",
    },
    {
      id: "java_1c",
      question: "Which statement is true about abstract classes in Java?",
      options: [
        "An abstract class is a class that does not allow other classes to inherit from it",
        "An abstract class is a class that cannot implement interfaces",
        "An abstract class is a class that can only contain abstract methods",
        "An abstract class is a class that cannot be instantiated",
      ],
      answer: 3,
      explanation: "An abstract class cannot be instantiated directly — you must subclass it. It CAN be inherited from, CAN implement interfaces, and CAN contain both abstract and concrete methods.",
    },
    {
      id: "java_1d",
      question: "Given the following code. Which statement is correct?",
      code: `int[] myArray = {1, 2, 3};
List<Integer> myList = new ArrayList<>();`,
      options: [
        "myList can contain elements of different types",
        "myArray and myList can both change size dynamically",
        "myList offers more flexibility in adding and removing elements",
        "It is possible to add an extra element to myArray directly after initialisation",
      ],
      answer: 2,
      explanation: "ArrayList (myList) can dynamically grow and shrink, making it more flexible. An array has a fixed size after initialisation. List<Integer> only accepts Integers due to generics.",
    },
    {
      id: "java_1e",
      question: "What happens when an unhandled unchecked exception occurs in a program?",
      options: [
        "The program does not even compile since you needed to put a try...catch block in the code",
        "The program will ignore the exception and continue executing",
        "The program asks the user to correct the mistake",
        "The program stops executing and the exception is printed to console",
      ],
      answer: 3,
      explanation: "Unchecked exceptions do NOT require a try-catch — the code compiles fine. But if they occur at runtime and are unhandled, the program crashes and prints the stack trace to the console.",
    },
    {
      id: "java_1f",
      question: "Given the following code. Which concept is illustrated?",
      code: `public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}`,
      options: [
        "Polymorphism",
        "Method Overloading",
        "Encapsulation",
        "Method Overriding",
      ],
      answer: 1,
      explanation: "Method Overloading means multiple methods with the same name but different parameters within the same class. Method Overriding is when a subclass redefines a method from the superclass with the same signature.",
    },

    // ── OLD EXAM QUESTIONS (REST API) ─────────────────────────────
    {
      id: "old_1a",
      question: "Given the Student class, Controller method signature and HTTP call shown here.\n\nURL: GET localhost:8080/courses/enroll_student/1/5\nBody: { \"name\": \"Anna Peeters\", \"achievedCredits\": 54 }\n\nExecuting this call reveals that it does not work as expected: there is no response from the server. Which statements regarding this HTTP call are correct?",
      options: [
        "The HTTP call uses an incorrect URL",
        "The HTTP call uses a correct RequestBody",
        "The HTTP call uses a wrong RequestBody",
        "The HTTP call uses a correct URL",
      ],
      answer: 0,
      explanation: "The URL is incorrect: /api prefix is missing, the HTTP method is GET instead of POST, and id2 is incorrectly placed as a path segment (/5) instead of a query parameter (?id2=5).",
    },
    {
      id: "old_1b",
      question: "Which statements about Dependency Injection and Inversion of Control are true? (Select all that apply)",
      options: [
        "Inversion of Control is to be avoided, it is better to manage object creation yourself as a developer so you can thoroughly check it",
        "Thanks to Dependency Injection, our classes are more 'loosely coupled' than without applying this technique",
        "Dependency Injection causes Spring to instantiate our classes",
        "Using Dependency Injection makes it so that our classes are unusable without Spring",
      ],
      answer: [1, 2],
      multiSelect: true,
      explanation: "DI makes classes loosely coupled (correct) and Spring instantiates beans via its IoC container (correct). IoC is NOT to be avoided. Classes with DI can still be instantiated manually with 'new'.",
    },
    {
      id: "old_1c",
      question: "Complete the annotations so that the endpoint is correctly defined. Fill in one annotation for each entry field.",
      code: `@RestController
@RequestMapping("/api")
public class Controller {

    @DeleteMapping("/students/{name}")
    public void deleteStudentsByNameAndAge(
            [___1___] String studentName,

            [___2___] int age) {

        // ...
    }
}`,
      options: [
        "@PathVariable(value = \"name\") / @RequestParam",
        "@PathVariable(\"name\") / @RequestParam",
        "@PathVariable / @RequestBody",
        "@RequestParam / @PathVariable",
      ],
      answer: 0,
      explanation: "The parameter name 'studentName' differs from '{name}', so @PathVariable(value = \"name\") is required. 'age' is a simple primitive passed as a query parameter, so @RequestParam is correct.",
    },
    {
      id: "old_1d",
      question: "Given the Student class, Controller method signature and HTTP call shown here.\n\nURL: GET localhost:8080/courses/enroll_student/1?id1=5\nBody: { \"name\": \"Anna Peeters\", \"credits\": 54 }\n\nExecuting this call reveals that it does not work as expected: there is no response from the server. Which statements regarding this HTTP call are correct?",
      options: [
        "The HTTP call uses a correct RequestBody",
        "The HTTP call uses an incorrect URL",
        "The HTTP call uses a correct URL",
        "The HTTP call uses a wrong RequestBody",
      ],
      answer: 1,
      explanation: "The URL is incorrect: /api prefix is missing and the method is GET instead of POST. The RequestBody is correct — 'name' and 'credits' match the Student class fields.",
    },
    {
      id: "old_1e",
      question: "According to what pattern is our backend built?",
      options: [
        "Model-View-Controller Pattern",
        "Client Server Pattern",
        "Layered Architecture Pattern",
        "REST Pattern",
      ],
      answer: 2,
      explanation: "A Spring Boot backend is built according to the Layered Architecture Pattern: Controller → Service → Repository. Each layer has one responsibility and only communicates with the layer below it.",
    },
    {
      id: "old_1f",
      question: "Which statements about the code below are NOT true? (Select all that apply)",
      code: `@Service
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
}`,
      options: [
        "Thanks to @Service and @Autowired, Spring can work with these classes. As a result, it is no longer possible to create an instance of these classes yourself via 'new'.",
        "All these annotations are redundant, with simple code like this, Spring does not need any annotations at all.",
        "It's good that @Autowired is written above the constructor, without @Autowired this code would no longer work.",
        "Thanks to @Service and @Autowired, Spring can inject an instance of the StudentService into the StudentController. This is an example of polymorphism.",
      ],
      answer: [0, 1, 2, 3],
      multiSelect: true,
      explanation: "All 4 are false: (1) You can still use 'new'. (2) Annotations are required. (3) @Autowired is optional on a single constructor since Spring 4.3. (4) This is Dependency Injection, not polymorphism.",
    },
    {
      id: "old_1g",
      question: "What happens if multiple constructors have an @Autowired annotation as in the code below?",
      code: `@Autowired
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
}`,
      options: [
        "Spring throws an error message on startup because it is not clear which constructor to use.",
        "Spring always uses the first constructor marked @Autowired, the other constructors are ignored.",
        "Depending on which other classes are present, Spring will choose the appropriate constructor.",
        "Spring randomly chooses one of the constructors on start-up. Therefore, it's better not to do this because your application will become unpredictable.",
      ],
      answer: 0,
      explanation: "When multiple constructors are annotated with @Autowired, Spring throws an error on startup because it cannot determine which constructor to use.",
    },
    {
      id: "old_1h",
      question: "What happens in Spring if no class is found for a dependency to be filled via @Autowired?",
      options: [
        "Spring defines its own class to inject",
        "The dependency remains 'null'",
        "An exception is thrown",
        "The class is ignored by Spring",
      ],
      answer: 2,
      explanation: "Spring throws a NoSuchBeanDefinitionException at startup when a required @Autowired dependency cannot be found. You can use @Autowired(required = false) to allow null instead.",
    },
    {
      id: "old_1i",
      question: "Complete the annotations so that the endpoint is correctly defined. Fill in one annotation for each entry field.",
      code: `@RestController
@RequestMapping("/api")
public class Controller {

    @PutMapping("/students/{id}")
    public void updateStudent(
            [___1___] Long studentId,

            [___2___] [___3___] Student studentData) {

        // ...
    }
}`,
      options: [
        "@PathVariable(\"id\") / @Valid / @RequestBody",
        "@PathVariable(\"id\") / @RequestBody / @Valid",
        "@PathVariable / @RequestBody / @Valid",
        "@RequestParam(\"id\") / @RequestBody / @Valid",
      ],
      answer: 0,
      explanation: "Field 1: @PathVariable(\"id\") because 'studentId' differs from '{id}'. Field 2: @Valid to trigger bean validation. Field 3: @RequestBody to bind the JSON. The correct order is @Valid @RequestBody Student.",
    },
    {
      id: "old_1j",
      question: "Given the Student class, Controller method signature and HTTP call shown here.\n\nURL: GET localhost:8080/courses/enroll_student/1?id2=5\nBody: { \"name\": \"Anna Peeters\", \"achievedCredits\": 54 }\n\nExecuting this call reveals that it does not work as expected: there is no response from the server. Which statements regarding this HTTP call are correct?",
      options: [
        "The HTTP call uses a correct URL",
        "The HTTP call uses an incorrect URL",
        "The HTTP call uses a wrong RequestBody",
        "The HTTP call uses a correct RequestBody",
      ],
      answer: 1,
      explanation: "The URL is incorrect: /api prefix is missing and GET is used instead of POST. The body also uses 'achievedCredits' instead of 'credits', making the RequestBody wrong too.",
    },

    // ── OLD EXAM QUESTIONS (JAVA OO) ──────────────────────────────
    {
      id: "javaold_1a",
      question: "What is polymorphism in Java?",
      options: [
        "The possibility of an object to inherit from multiple super classes",
        "The possibility of an object to be an instance of its own class and of all the super-classes of that class at the same time",
        "The possibility of an object to define multiple methods with the same name but with different arguments",
        "The possibility of an object to have multiple constructors",
      ],
      answer: 1,
      explanation: "Polymorphism means an object is simultaneously an instance of its own class and all its superclasses. For example, a Dog object is also an Animal. This is NOT multiple inheritance, method overloading, or multiple constructors.",
    },
    {
      id: "javaold_1b",
      question: "What is the output of the code below?",
      code: `public class Application {

    public static void main(String[] args) {
        Foo obj1 = new Foo();
        Foo obj2 = obj1;

        obj2 = change(obj2);
        change(obj1);

        System.out.println("values of obj1 : ");
        obj1.print();
        System.out.println("values of obj2 : ");
        obj2.print();
    }

    public static Foo change(Foo obj) {
        obj.a = obj.a + 20;
        obj.text = "Goodbye";
        return obj;
    }
}

class Foo {
    public int a;
    public String text;

    public Foo() {
        a = 10;
        text = "Hello";
    }

    public void print() {
        System.out.println("a = " + a + ", text = " + text);
    }
}`,
      options: [
        "values of obj1: a=50, text=Goodbye / values of obj2: a=50, text=Goodbye",
        "values of obj1: a=50, text=Goodbye / values of obj2: a=10, text=Hello",
        "values of obj1: a=10, text=Hello / values of obj2: a=50, text=Goodbye",
        "values of obj1: a=10, text=Hello / values of obj2: a=10, text=Hello",
      ],
      answer: 0,
      explanation: "obj2 = obj1 does NOT create a copy — both point to the same object. After change(obj2): a=30. After change(obj1): a=50. Both variables point to the same object so both print a=50, text=Goodbye.",
    },
    {
      id: "javaold_1c",
      question: "In which of the actions listed below is Maven NOT involved?",
      options: [
        "Executing your tests",
        "Showing runtime errors when you start your application",
        "Providing a default project structure for all your project files",
        "Loading in an external library that you want to use in your backend",
      ],
      answer: 1,
      explanation: "Runtime errors are shown by the JVM during execution — Maven is already done at that point. Maven IS involved in running tests (mvn test), providing project structure, and loading dependencies via pom.xml.",
    },
    {
      id: "javaold_1d",
      question: "What characterises an unchecked exception?",
      options: [
        "An unchecked exception points to a fundamental flaw in your program that makes it crash, for example a lack of working memory for the program",
        "An unchecked exception can only be handled via a try-catch block, you can not add it to the method signature",
        "An unchecked exception does not need to be handled via a try-catch block or by adding it to the method signature",
        "An unchecked exception must be handled via a try-catch block or by adding it to the method signature",
      ],
      answer: 2,
      explanation: "Unchecked exceptions (like NullPointerException) do not require handling — the compiler does not force you to catch them or declare them. Checked exceptions (like IOException) DO require handling.",
    },
    {
      id: "javaold_1e",
      question: "What is the output of the code below?",
      code: `class Foo {
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

    public void print() {
        System.out.println(str);
    }
}`,
      options: [
        "abec",
        "abe",
        "abefc",
        "abefd",
      ],
      answer: 2,
      explanation: "str starts as 'a'. a() adds 'b' → 'ab'. b() adds 'e' → 'abe'. c() throws Exception, caught in b() which throws IllegalArgumentException. finally always runs → adds 'f' → 'abef'. Back in a(), IllegalArgumentException caught → adds 'c' → 'abefc'.",
    },
    {
      id: "javaold_1f",
      question: "Which statement about inheritance is NOT true?",
      options: [
        "An interface can inherit from an interface",
        "You can disallow inheritance from classes that you write yourself",
        "All classes inherit, directly or indirectly, from the class Object",
        "You can inherit from multiple classes in Java",
      ],
      answer: 3,
      explanation: "Java does NOT support multiple class inheritance. You can only extend one class. You CAN implement multiple interfaces. Interfaces can extend interfaces. All classes ultimately extend Object. You can use 'final' to prevent inheritance.",
    },
    {
      id: "javaold_1g",
      question: "What is the output of the code below?",
      code: `class Base {
    public Base() {
        System.out.print("0");
    }

    public void foo() {
        bar();
        System.out.print("1");
    }

    public void bar() {
        System.out.print("2");
    }
}

class Derived extends Base {
    public void foo() {
        super.foo();
        System.out.print("3");
    }

    public void bar() {
        System.out.print("4");
    }
}

// Main: Base b = new Derived(); b.foo();`,
      options: [
        "213",
        "413",
        "0213",
        "0413",
      ],
      answer: 3,
      explanation: "new Derived() calls Base constructor → '0'. b.foo() calls Derived.foo() (polymorphism). super.foo() calls Base.foo() which calls bar() — but bar() is overridden in Derived → '4'. Then Base.foo() prints '1'. Then Derived.foo() prints '3'. Result: 0413.",
    },
    {
      id: "javaold_1h",
      question: "Which statement about static methods is true?",
      options: [
        "A static method belongs to an instance of the class it is defined on",
        "A static method can access fields of objects of the class it is defined on",
        "A static method can be called without making an instance of the class it is defined on",
        "A static method can call non-static methods",
      ],
      answer: 2,
      explanation: "Static methods belong to the class itself, not an instance. You call them via the class name (e.g. Math.random()). They cannot access non-static fields or call non-static methods without creating an instance first.",
    },
    {
      id: "javaold_1i",
      question: "What is the output of the code below?",
      code: `class Foo {
    public void start() {
        long[] a1 = {3, 4, 5};
        long[] a2 = fix(a1);
        System.out.print(a1[1] + a2[0] + a2[1]);
    }

    private long[] fix(long[] a) {
        a[1] = 7;
        return a;
    }
}`,
      options: [
        "21",
        "14",
        "11",
        "17",
      ],
      answer: 3,
      explanation: "a2 = fix(a1) does NOT create a copy — a2 points to the same array as a1. fix sets a[1]=7, so a1={3,7,5} and a2={3,7,5}. Then a1[1]+a2[0]+a2[1] = 7+3+7 = 17.",
    },
    {
      id: "javaold_1j",
      question: "What characterises a checked exception?",
      options: [
        "A checked exception does not need to be handled via a try-catch block or by adding it to the method signature",
        "A checked exception must be handled via a try-catch block or by adding it to the method signature",
        "A checked exception points to a fundamental flaw in your program that makes it crash, for example a lack of working memory for the program",
        "A checked exception can only be handled via a try-catch block, you can not add it to the method signature",
      ],
      answer: 1,
      explanation: "Checked exceptions (like IOException) MUST be handled — either with try-catch or by declaring them in the method signature with 'throws'. The compiler enforces this. Unchecked exceptions do not have this requirement.",
    },
    {
      id: "javaold_1k",
      question: "What is the output of the code below?",
      code: `class Base {
    public void foo() {
        System.out.print("1");
    }

    public void bar() {
        System.out.print("2");
    }
}

class Derived extends Base {
    public Derived() {
        System.out.print("3");
    }

    public void foo() {
        this.bar();
        System.out.print("4");
    }

    public void bar() {
        super.foo();
        System.out.print("5");
    }
}

// Main: Base b = new Derived(); b.foo();`,
      options: [
        "3254",
        "32541",
        "31542",
        "3154",
      ],
      answer: 3,
      explanation: "new Derived() → '3'. b.foo() → Derived.foo(). this.bar() → Derived.bar(). super.foo() → Base.foo() → '1'. Back in Derived.bar() → '5'. Back in Derived.foo() → '4'. Result: 3154.",
    },
    {
      id: "javaold_1l",
      question: "What is the primary use-case of interfaces in Java?",
      options: [
        "To allow polymorphism",
        "To make sure that the program does not crash when an exception occurs",
        "To provide an abstraction. By using an interface as a type the concrete implementation is no longer important.",
        "To enable encapsulation",
      ],
      answer: 2,
      explanation: "The primary use-case of interfaces is abstraction — by programming to an interface rather than a concrete class, you decouple your code from specific implementations. For example, List instead of ArrayList allows you to swap implementations freely.",
    },
  ],
};

export default apirequest;