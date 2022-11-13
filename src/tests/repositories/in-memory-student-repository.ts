import { StudentRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudentRepository implements StudentRepository {
  public students: Student[] = [];

  public async findById(studentId: string): Promise<Student | null> {
    const student = this.students.find((student) => student.id == studentId);

    if (!student) {
      return null;
    }

    return student;
  }
}
