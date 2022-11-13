import { Challenge } from "../../domain/entities/challenge";

export interface ChallengeRepository {
  findById(challengeId: string): Promise<Challenge | null>;
}
