import { createUserAbility } from "../_domain/ability";
import { userRepository } from "../_repositories/user";
import { AuthorizationError } from "@/shared/lib/errors";
import { SharedSession, SharedUser, UserId } from "@/kernel/domain/user";

type GetUser = {
  userId: UserId;
  session: SharedSession;
};

export class GetUserService {
  async exec({ userId, session }: GetUser): Promise<SharedUser> {
    const userAbility = createUserAbility(session);

    if (!userAbility.canGetUser(userId)) {
      throw new AuthorizationError();
    }

    return userRepository.getUserById(userId);
  }
}

export const getUserService = new GetUserService();
