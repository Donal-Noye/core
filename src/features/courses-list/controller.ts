import { compileMDX } from "@/shared/lib/mdx/server";
import {
  createPublicServerApi,
  publicProcedure,
  router,
} from "@/kernel/lib/trpc/server";
import { getCoursesListService } from "@/entities/course/course.server";

export const coursesListController = router({
  coursesList: router({
    get: publicProcedure.query(async () => {
      const coursesList = await getCoursesListService.exec();

      return await Promise.all(
        coursesList.map(async (course) => ({
          ...course,
          description: await compileMDX(course.description).then((r) => r.code),
        })),
      );
    }),
  }),
});

export type CoursesListController = typeof coursesListController

export const coursesListServerApi = createPublicServerApi(
  coursesListController,
);
