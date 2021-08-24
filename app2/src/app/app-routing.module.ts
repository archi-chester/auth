import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {ChildComponent} from "./child/child.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {Child2Component} from "./child2/child2.component";
import {AuthGuard} from "./_service/guard.guard";

const routes: Routes = [
  {
    path: 'app2/child',
    component: ChildComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'app2/child2',
    component: Child2Component,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {path: 'app2', component: WelcomeComponent},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
})
export class AppRoutingModule {
}
