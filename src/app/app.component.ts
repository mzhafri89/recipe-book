import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBY84TKpV17rf1xOADKB1TLRggHURlnefE',
      authDomain: 'ng-recipe-book-e8f84.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
