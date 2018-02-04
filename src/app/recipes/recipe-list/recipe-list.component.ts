import {Component, OnDestroy, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subs: Subscription;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subs = this.recipeService.recipeNotification.subscribe( (recipe: Recipe[]) => {
      this.recipes = recipe;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
