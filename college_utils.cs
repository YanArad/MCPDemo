using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

public sealed class Student
{
    public string Name { get; }
    public int Age { get; }
    public string Faculty { get; }

    public Student(string name, int age, string faculty)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Age = age;
        Faculty = faculty ?? throw new ArgumentNullException(nameof(faculty));
    }

    public override string ToString()
    {
        return $"Student(Name={Name}, Age={Age}, Faculty={Faculty})";
    }
}

public sealed class College
{
    private readonly List<Student> students = new List<Student>();

    public ReadOnlyCollection<Student> Students => students.AsReadOnly();

    public void AddStudent(Student student)
    {
        if (student == null)
        {
            throw new ArgumentNullException(nameof(student));
        }

        students.Add(student);
    }

    public override string ToString()
    {
        return $"College(Students=[{string.Join(", ", students)}])";
    }
}

public static class CollegeUtils
{
    public static void Main()
    {
        var college = new College();
        college.AddStudent(new Student("Alice Cohen", 20, "Computer Science"));
        college.AddStudent(new Student("Ben Levi", 22, "Mathematics"));
        college.AddStudent(new Student("Dana Mizrahi", 19, "Physics"));

        Console.WriteLine(college);
    }
}
