import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {NewComponent} from "./new-component/new-component.component";

const routes: Routes = [
  // {
  //   path: 'new-component', component: NewComponent,
  // },
  // {
  //   path: 'app3/new-component/:id', component: NewComponent,
  // },
  {
    path: 'app3/:id', component: NewComponent,
  },
  {
    path: 'app3/new-component/:id', component: NewComponent,
  },
  {
    path: '**', component: EmptyRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
