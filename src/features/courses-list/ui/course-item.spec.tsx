import { render, screen } from "@testing-library/react";
import { CourseItem } from "@/features/courses-list/ui/course-item";
import { userEvent } from "@testing-library/user-event";

describe("course item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{
          id: "afqfqf",
          name: "Name",
          description: "Descriptiopwg",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});
