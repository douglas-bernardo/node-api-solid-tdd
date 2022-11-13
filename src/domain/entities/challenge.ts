import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
  title: string;
  instructionUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public static create(props: ChallengeProps, id?: string) {
    const challange = new Challenge(props, id);

    return challange;
  }
}
