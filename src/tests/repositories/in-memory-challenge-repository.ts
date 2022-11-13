import { ChallengeRepository } from "../../application/repositories/ChallengeRepository copy";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengeRepository implements ChallengeRepository {
  public challenges: Challenge[] = [];

  public async findById(challengeId: string): Promise<Challenge | null> {
    const challenge = this.challenges.find(
      (challenge) => challenge.id == challengeId
    );

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}
