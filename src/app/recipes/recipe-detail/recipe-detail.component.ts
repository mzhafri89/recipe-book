import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeID: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.recipeID = +params['id'];
      this.recipe = this.recipeService.getSelectedRecipe(this.recipeID);
    });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeID);
    this.router.navigate(['/recipes']).then();
  }
  /*onEdit() {
    alternate option in navigating to the recipe editing page
    this.router.navigate(['edit'], {relativeTo: this.route});
  }*/
}
