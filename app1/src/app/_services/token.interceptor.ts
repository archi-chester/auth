// import {Injectable} from "@angular/core";
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable, Subscribable, Subscription} from "rxjs";
// import {AuthService} from "./auth.service";
//
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//
//   private tokenSub: Subscription;
//   private token: string = '';
//
//   constructor(private authService: AuthService) {
//     this.tokenSub = this.authService.castToken.subscribe(token => this.token = token);
//
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (this.token.length) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${this.token}`
//         }
//       });
//     }
//
//     return next.handle(req);
//   }
//
// }
