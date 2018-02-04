import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.auth.signUp(value.email, value.password);
  }
}
