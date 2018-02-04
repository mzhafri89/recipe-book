import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.auth.signIn(value.email, value.password);
  }
}
