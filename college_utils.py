class Student:
    def __init__(self, name, age, faculty):
        self.name = name
        self.age = age
        self.faculty = faculty

    def __repr__(self):
        return f"Student(name={self.name!r}, age={self.age}, faculty={self.faculty!r})"


class College:
    def __init__(self, students=None):
        self.students = list(students) if students is not None else []

    def add_student(self, student):
        self.students.append(student)

    def __repr__(self):
        return f"College(students={self.students!r})"


college = College([
    Student("Alice Cohen", 20, "Computer Science"),
    Student("Ben Levi", 22, "Mathematics"),
    Student("Dana Mizrahi", 19, "Physics"),
])
