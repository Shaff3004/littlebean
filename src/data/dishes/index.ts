import { breakfast } from "./breakfast";
import { lunch } from "./lunch";
import { snack } from "./snack";
import { dinner } from "./dinner";
import { desserts } from "./desserts";
import { drinks } from "./drinks";
import type { CategoryId, Dish } from "@/types";

export const allDishes: Dish[] = [
  ...breakfast,
  ...lunch,
  ...snack,
  ...dinner,
  ...desserts,
  ...drinks,
];

export const dishesByCategory: Record<CategoryId, Dish[]> = {
  breakfast,
  lunch,
  snack,
  dinner,
  desserts,
  drinks,
};

export function getDishById(id: string): Dish | undefined {
  return allDishes.find((dish) => dish.id === id);
}

export function getDishesByCategory(categoryId: CategoryId): Dish[] {
  return dishesByCategory[categoryId] ?? [];
}
