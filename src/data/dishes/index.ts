import breakfastData from "./breakfast.json";
import lunchData from "./lunch.json";
import snackData from "./snack.json";
import dinnerData from "./dinner.json";
import dessertsData from "./desserts.json";
import drinksData from "./drinks.json";
import type { CategoryId, Dish } from "@/types";

const breakfast = breakfastData as Dish[];
const lunch = lunchData as Dish[];
const snack = snackData as Dish[];
const dinner = dinnerData as Dish[];
const desserts = dessertsData as Dish[];
const drinks = drinksData as Dish[];

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
