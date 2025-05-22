import { CoursesList } from "@/features/courses-list/courses-list";

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-4xl font-bold mb-6">Course</h1>
      <CoursesList />
    </main>
  );
}
