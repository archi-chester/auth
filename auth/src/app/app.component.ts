import {Component, OnInit} from '@angular/core';
import * as Keycloak from "keycloak-js";
import {KeycloakService} from "keycloak-angular";
// import {assetUrl} from '../single-spa/asset-url';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'auth2';
  token: string;
  interval: any

  constructor(private keycloak: KeycloakService) {

  }

  ngOnInit() {
    this.init()
  }

  init() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
    this.keycloak.isLoggedIn().then(login => {
      console.log('login: ', login);
      this.keycloak.getToken().then(token => {
        this.token = token;
        localStorage.setItem('token', this.token);
        console.log('Token: ', this.token);

        this.getAuthorizationInfo(token);

        const interval = setInterval(() => {this.expirationFunc(token, interval)}, 10000);

      })
    })
  }

  ngOnDestroy() {
  }

  getAuthorizationInfo(token: string) {
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);

    console.log(decodedToken);
    console.log(decodedToken.realm_access.roles);
    const roles = decodedToken.realm_access.roles.join()

    localStorage.setItem('username', decodedToken.preferred_username);
    console.log(decodedToken.preferred_username);

    localStorage.setItem('roles', roles);
    console.log(roles);
    console.log(this.keycloak.getUserRoles());
  }

  expirationFunc(myRawToken: string, interval: any) {

    const helper = new JwtHelperService();

    const isExpired = helper.isTokenExpired(myRawToken);

    if(isExpired) {
      console.log('isExpired')
      // try to refresh or die
      this.keycloak.updateToken().then(() => {
        console.log('Token is up to date')

        clearInterval(interval);
        this.init()

      })
    }


    const decodedToken = helper.decodeToken(myRawToken);
    console.log(decodedToken)

// Other functions
    const expirationDate = helper.getTokenExpirationDate(myRawToken);
    // const isExpired = helper.isTokenExpired(myRawToken);

    console.log(expirationDate, isExpired)
  }
}
