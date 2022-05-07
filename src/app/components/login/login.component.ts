import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isIOS: boolean = true;
  isAndroid: boolean = true;

  constructor(public platform: Platform) {}

  ngOnInit(): void {
    /* This is used to show or hide the 
    app buttons based on platform */
    if (this.platform.IOS) {
      this.isIOS = true;
      this.isAndroid = false;
    } else if (this.platform.ANDROID) {
      this.isIOS = false;
      this.isAndroid = true;
    } else {
      this.isIOS = true;
      this.isAndroid = true;
    }
  }
}
