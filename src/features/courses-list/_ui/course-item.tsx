"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { CourseEntity } from "@/entities/course/course";
import { useMdxComponent } from "@/shared/lib/mdx";

export function CourseItem({ course }: { course: CourseEntity }) {
  const Description = useMdxComponent(course.description)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <Description size="sm" />
      </CardHeader>
    </Card>
  );
}
