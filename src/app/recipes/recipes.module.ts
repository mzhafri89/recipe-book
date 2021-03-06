import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AuthGuardService} from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [AuthGuardService]
})
export class RecipesModule {

}
