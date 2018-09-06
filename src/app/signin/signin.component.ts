import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  number: any;
  pass: any;
  constructor() { }

  ngOnInit() {
  }

  signin() {
    // here is the function of sign in
  }

}
