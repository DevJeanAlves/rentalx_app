import { Category } from "../entities/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
