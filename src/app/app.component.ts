import { Component } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "wellthy-assignment";
  constructor(router: Router) {
    router.events.subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === "popstate") {
        // Perform actions
        localStorage.clear();
      }
    });
  }
}
