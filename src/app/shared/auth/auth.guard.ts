import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router) {}
  canActivate() {
    if (this.auth.isLoggedIn()) {
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    alert("You have not logged in");
    this.router.navigate(["/login"]);
    return false;
  }
}
