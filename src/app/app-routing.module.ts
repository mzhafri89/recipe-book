import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './core/error-page/error-page.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {HomeComponent} from './core/home/home.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule, AuthRoutingModule]
})
export class AppRoutingModule {
}
