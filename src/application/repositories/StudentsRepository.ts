import { Student } from "../../domain/entities/student";

export interface StudentRepository {
  findById(studentId: string): Promise<Student | null>;
}
