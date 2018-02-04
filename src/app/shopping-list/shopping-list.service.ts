import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEdit  = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(idx: number) {
    return this.ingredients[idx];
  }
  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.serviceUpdate();
  }
  updateIngredients(idx: number, ingredient: Ingredient) {
    console.log(idx, ingredient);
    this.ingredients[idx] = ingredient;
    this.serviceUpdate();
  }
  deleteIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.serviceUpdate();
  }
  serviceUpdate () {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
