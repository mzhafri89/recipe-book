import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe( (res: Ingredient[]) => {
      this.ingredients = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(idx: number) {
    this.shoppingListService.startEdit.next(idx);
  }

}
