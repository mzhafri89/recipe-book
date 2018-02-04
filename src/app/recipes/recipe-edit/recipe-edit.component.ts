import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    const recipeIng = new FormArray([]);
    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getSelectedRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients ) {
          recipeIng.push(new FormGroup({
            'ingName': new FormControl(ingredient.name, Validators.required),
            'ingAmt': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'recipeImg': new FormControl(recipeImg, Validators.required),
      'recipeDesc': new FormControl(recipeDesc, Validators.required),
      'recipeIng': recipeIng
    });
  }

  onSubmit() {
    const formValue = this.recipeForm.value;
    const ingArr = [];
    for (const ing of formValue.recipeIng) {
      ingArr.push(new Ingredient(ing.ingName, ing.ingAmt));
    }
    const recipe = new Recipe(
      formValue.recipeName,
      formValue.recipeDesc,
      formValue.recipeImg,
      ingArr
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.returnToDetail();
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('recipeIng')).push(
      new FormGroup({
        'ingName': new FormControl(null, Validators.required),
        'ingAmt': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel() { this.returnToDetail() }

  returnToDetail() {
    this.router.navigate(['../'], {relativeTo: this.route}).then();
  }

  onDelete(idx: number) {
    (<FormArray>this.recipeForm.get('recipeIng')).removeAt(idx);
  }
}
