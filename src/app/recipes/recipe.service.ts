import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  recipeNotification = new Subject<Recipe[]>();

  getRecipes() {
    return this.recipes.slice();
  }

  getSelectedRecipe(id: number): Recipe {
    console.log(this.recipes[id]);
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipes.push(recipe);
    this.recipeNotification.next(this.recipes.slice());
  }

  updateRecipe(idx: number, recipe: Recipe) {
    console.log(recipe);
    this.recipes[idx] = recipe;
    this.recipeNotification.next(this.recipes.slice());
  }

  deleteRecipe(idx: number) {
    this.recipes.splice(idx, 1);
    this.recipeNotification.next(this.recipes.slice());
  }

  addRecipeModel(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeNotification.next(this.recipes.slice());
  }
}
