import { coursesRepository } from "@/entities/course/_repositories/course";
import { CourseItem } from "@/features/courses-list/_ui/course-item";
import { compileMDX } from "@/shared/lib/mdx/server";

export async function CoursesList() {
  const coursesList = await coursesRepository.getCoursesList();

  const compileCourses = await Promise.all(
    coursesList.map(async (course) => ({
      ...course,
      description: await compileMDX(course.description).then((r) => r.code),
    })),
  );

  return (
    <div className="flex flex-col gap-3">
      {compileCourses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
