import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: any;
  number: any;
  password: any;
  conPassword: any;

  constructor() { }

  ngOnInit() {
  }

  signup() {
    console.log(this.name);
    console.log(this.number);
    console.log(this.password);
    console.log(this.conPassword);
  }

}
