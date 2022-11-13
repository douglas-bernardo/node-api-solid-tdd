import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengeRepository } from "../../tests/repositories/in-memory-challenge-repository";
import { InMemoryStudentRepository } from "../../tests/repositories/in-memory-student-repository";
import { CreateChallengeSubmission } from "./create-challeng-submission";

describe("Create challenge submission use case", () => {
  it("should be abble to create a new challenge submission", async () => {
    const studentRepository = new InMemoryStudentRepository();
    const challengeRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: "John Doe",
      email: "example@email.com",
    });

    const challenge = Challenge.create({
      title: "A new challenge",
      instructionUrl: "http://example.com",
    });

    studentRepository.students.push(student);
    challengeRepository.challenges.push(challenge);

    const challengeSUbmission = new CreateChallengeSubmission(
      studentRepository,
      challengeRepository
    );

    const response = await challengeSUbmission.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
