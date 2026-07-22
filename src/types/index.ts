export type BadgeType =
  | "chef"
  | "favorite"
  | "pregnancy"
  | "healthy"
  | "new"
  | "quick"
  | "seasonal";

export interface Dish {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  time: number;
  image: string;
  badges: BadgeType[];
  ingredients?: string[];
}

export type CategoryId =
  | "breakfast"
  | "lunch"
  | "snack"
  | "dinner"
  | "desserts"
  | "drinks";

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  emoji: string;
  description: string;
}
