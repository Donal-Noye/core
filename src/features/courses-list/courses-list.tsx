import { CoursesListClient } from "@/features/courses-list/_ui/courses-list";
import { coursesListHttpApi } from "@/features/courses-list/_api";

export async function CoursesList() {
  const coursesList = await coursesListHttpApi.coursesList.get.query()

  return (
    <CoursesListClient defaultList={coursesList} />
  );
}
