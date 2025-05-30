import { compileMDX } from "@/shared/lib/mdx/server";
import { Controller, publicProcedure, router } from "@/kernel/lib/trpc/server";
import { GetCoursesListService } from "@/entities/course/server";
import { injectable } from "inversify";

@injectable()
export class CoursesListController extends Controller {
  constructor(private getCoursesListService: GetCoursesListService) {
    super();
  }

  public router = router({
    coursesList: router({
      get: publicProcedure.query(async () => {
        const coursesList = await this.getCoursesListService.exec();

        return await Promise.all(
          coursesList.map(async (course) => ({
            ...course,
            description: await compileMDX(course.description).then(
              (r) => r.code,
            ),
          })),
        );
      }),
    }),
  });
}
