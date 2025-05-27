
import { CoursesListClient } from "@/features/courses-list/_ui/courses-list";
import { coursesListServerApi } from "@/features/courses-list/controller";

export async function CoursesList() {
  const coursesList = await coursesListServerApi.coursesList.get.fetch()

  return (
    <CoursesListClient defaultList={coursesList} />
  );
}
