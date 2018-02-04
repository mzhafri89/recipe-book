import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RecipeService} from '../recipes/recipe.service';
import {StoreService} from '../shared/store.service';
import {AuthenticationService} from '../auth/authentication.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthGuardService} from '../auth/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService, StoreService, AuthenticationService],
})
export class CoreModule { }
