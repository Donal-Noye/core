import { Container } from "inversify";
import { CourseEntityModule } from "@/entities/course/server";
import { CoursesListModule } from "@/features/courses-list/server";

export function init() {
  const container = new Container()

  container.load(CoursesListModule, CourseEntityModule)

  return container
}