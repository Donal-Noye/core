import { GetCoursesListService } from "@/entities/course/_services/get-courses-list";
import { ContainerModule } from "inversify";
import { ContainerModuleLoadOptions } from "inversify";
import { CoursesRepository } from "@/entities/course/_repositories/course";

export const CourseEntityModule = new ContainerModule(
  (options: ContainerModuleLoadOptions) => {
    options.bind(GetCoursesListService).toSelf();
    options.bind(CoursesRepository).toSelf();
  },
);

export { GetCoursesListService };
