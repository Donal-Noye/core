import { ContainerModule, ContainerModuleLoadOptions } from "inversify";
import { CoursesListController } from "./_controller";
import { Controller } from "@/kernel/lib/trpc/server";

export const CoursesListModule = new ContainerModule(
  (options: ContainerModuleLoadOptions) => {
    options.bind(Controller).to(CoursesListController);
  },
);

export { CoursesListController };
