import { Component, OnInit } from '@angular/core';
import {Route} from "@angular/router";

@Component({
  selector: 'app2-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Go to Child')
  }
}
