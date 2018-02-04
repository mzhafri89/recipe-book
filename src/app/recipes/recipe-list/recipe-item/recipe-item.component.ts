import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeID: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  /*onSelected() {
    alert(JSON.stringify(this.recipeID));
    this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['1'], {relativeTo: this.route}).then();
  }*/

}
