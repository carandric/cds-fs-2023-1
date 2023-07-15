import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DefaultGuard implements CanActivate {

  token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2NDdiN2JhYmQ4MGMxOTY1NzJlN2IzMzQiLCJpYXQiOjE2ODg4MjY0MDh9.sSRSdi3V1yrt_64kx7xUqCghLuitUVR4Vx0QnQpU-wU";

  constructor(public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // if (localStorage.getItem('token') === this.token) {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      this.router.navigate(['/fullscreen/login'])
      return false;
    }

  }

}
