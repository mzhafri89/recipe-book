import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthenticationService} from '../auth/authentication.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StoreService {
  constructor(private recipeService: RecipeService, private http: HttpClient, private auth: AuthenticationService) {
  }

  storeRecipes() {
    const token = this.auth.getToken();
    return this.http.put('https://ng-recipe-book-e8f84.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.auth.getToken();
    this.http.get<Recipe[]>('https://ng-recipe-book-e8f84.firebaseio.com/recipe.json?auth=' + token)
      .map( (recipes) => {
        for (const recipe of recipes ) {
          if ( !recipe.ingredients ) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
      (response: Recipe[]) => {
        this.recipeService.addRecipeModel(response);
      }
    );
  }
}
