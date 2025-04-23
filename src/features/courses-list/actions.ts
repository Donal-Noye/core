"use server";

import { coursesRepository } from "@/features/courses-list/courses.repository";
import { revalidatePath } from "next/cache";

export const createCourseAction = async (
  revalidatePagePath: string,
  command: CreateCourseListElementCommand,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
