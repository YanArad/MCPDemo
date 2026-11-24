import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public final class collejeUtils {
    private collejeUtils() {
    }

    public static void main(String[] args) {
        College college = new College();
        college.addStudent(new Student("Alice Cohen", 20, "Computer Science"));
        college.addStudent(new Student("Ben Levi", 22, "Mathematics"));
        college.addStudent(new Student("Dana Mizrahi", 19, "Physics"));

        System.out.println(college);
    }
}

final class Student {
    private final String name;
    private final int age;
    private final String faculty;

    Student(String name, int age, String faculty) {
        this.name = Objects.requireNonNull(name, "name must not be null");
        this.age = age;
        this.faculty = Objects.requireNonNull(faculty, "faculty must not be null");
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getFaculty() {
        return faculty;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + ", faculty='" + faculty + "'}";
    }
}

final class College {
    private final List<Student> students = new ArrayList<>();

    public void addStudent(Student student) {
        students.add(Objects.requireNonNull(student, "student must not be null"));
    }

    public List<Student> getStudents() {
        return Collections.unmodifiableList(new ArrayList<>(students));
    }

    @Override
    public String toString() {
        return "College{students=" + students + "}";
    }
}
