import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';

const slRoutes: Routes = [
  {path: '', component: ShoppingListComponent, children: [
      {path: 'shopping-edit', component: ShoppingEditComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(slRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
