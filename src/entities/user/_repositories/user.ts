import { dbClient } from "@/shared/lib/db";
import { SharedUser, UserId } from "@/kernel/domain/user";

export class UserRepository {
  async getUserById(userId: UserId): Promise<SharedUser> {
    return dbClient.user.findUniqueOrThrow({
      where: { id: userId },
    });
  }
}

export const userRepository = new UserRepository();
