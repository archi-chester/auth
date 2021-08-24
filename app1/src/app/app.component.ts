import {Component, OnDestroy, OnInit} from '@angular/core';
import {BivAuthModuleService} from "biv-auth-module";
import {Subscription} from "rxjs";

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public token: string;
  public tokenSub: Subscription;

  constructor(private authService: BivAuthModuleService) {
    this.tokenSub = this.authService.castToken.subscribe(token => this.token = token);
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
  }

  ngOnInit() {}

  onClick() {
    console.log('Click');
  }
}
