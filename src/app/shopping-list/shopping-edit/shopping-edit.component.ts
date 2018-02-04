import {
  Component, OnDestroy,
  OnInit, ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editModeIdx: number;
  editItem: Ingredient;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEdit.subscribe( (idx: number) => {
      this.editMode = true;
      this.editModeIdx = idx;
      this.editItem = this.shoppingListService.getIngredient(idx);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = [new Ingredient(value.name, value.amount)];
    if (this.editMode) {
      this.shoppingListService.updateIngredients(this.editModeIdx, new Ingredient(value.name, value.amount));
    } else {
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editModeIdx);
    this.slForm.reset();
  }

}
