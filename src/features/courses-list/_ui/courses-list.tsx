"use client";

import { CourseItem } from "@/features/courses-list/_ui/course-item";
import { CourseEntity } from "@/entities/course/_domain/types";
import { coursesListApi } from "@/features/courses-list/_api";

export function CoursesListClient({
  defaultList,
}: {
  defaultList: CourseEntity[];
}) {
  const { data: coursesList } = coursesListApi.coursesList.get.useQuery(
    undefined,
    {
      initialData: defaultList,
    },
  );

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
