import { Component } from '@angular/core';
import { StoreService } from '../../shared/store.service';
import { Response } from '@angular/http';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private storeService: StoreService, private auth: AuthenticationService) {
  }

  onStore() {
    this.storeService.storeRecipes().subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);
      }
    );
  }

  onGet() {
    this.storeService.getRecipes();
  }
}
