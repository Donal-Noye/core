import { dbClient } from "@/shared/lib/db";
import { UserEntity, UserId } from "../_domain/types";

export class UserRepository {
  async getByEmail(email: string): Promise<UserEntity | null> {
    return dbClient.user.findUnique({
      where: { email },
    });
  }

  async getUserById(userId: UserId): Promise<UserEntity> {
    return dbClient.user.findUniqueOrThrow({
      where: { id: userId },
    });
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    return dbClient.user.create({
      data: user,
    });
  }
}

export const userRepository = new UserRepository();
