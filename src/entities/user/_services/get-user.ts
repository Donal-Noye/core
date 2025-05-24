import { SessionEntity, UserEntity, UserId } from "../_domain/types";
import { createUserAbility } from "../_domain/ability";
import { userRepository } from "../_repositories/user";
import { AuthorizationError } from "@/shared/lib/errors";

type GetUser = {
  userId: UserId;
  session: SessionEntity;
};

export class GetUserService {
  async exec({ userId, session }: GetUser): Promise<UserEntity> {
    const userAbility = createUserAbility(session);

    if (!userAbility.canGetUser(userId)) {
      throw new AuthorizationError();
    }

    return userRepository.getUserById(userId);
  }
}

export const getUserService = new GetUserService();
