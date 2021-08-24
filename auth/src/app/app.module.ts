import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  console.log('initializeKeycloak');
  return () =>
    keycloak.init({
      config: {
        url: 'http://10.16.100.215:8080/auth',
        realm: 'fronttest',
        clientId: 'test-app',
        // url: 'http://10.16.100.215:8080/auth',
        // realm: 'fronttest',
        // clientId: 'account',
        // url: 'http://10.16.100.215:8080/auth/',
        // realm: 'vskb2b',
        // clientId: 'b2b-app'
      },
      initOptions: {
        onLoad: 'login-required',
        // onLoad: 'check-sso',
        checkLoginIframe: false, // ???
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html',
      },
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PrimaryNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
