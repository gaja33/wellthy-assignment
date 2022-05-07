import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
declare let Email: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isIOS: boolean = true;
  isAndroid: boolean = true;
  loginform: FormGroup;

  constructor(public platform: Platform, public router: Router) {}

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

    this.loginform = new FormGroup({
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]{10}$"),
      ]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        this.customPatternValid({
          pattern: /^[A-Za-z]([_]?[A-Za-z\d]+)*$/,
          msg: "Only alphanumeric with optional underscore is allowed and should start with character only",
        }),
      ]),
    });
  }

  get phone() {
    return this.loginform.get("phone");
  }
  get username() {
    return this.loginform.get("username");
  }

  // customPatternValid function for alphanumeric and underscore

  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let urlRegEx: RegExp = config.pattern;
      if (control.value && !control.value.match(urlRegEx)) {
        return {
          invalidMsg: config.msg,
        };
      } else {
        return null;
      }
    };
  }

  reDirectToHome = () => {
    //Method to send email
    Email.send({
      Host: `smtp.elasticemail.com`,
      Username: "gajananpalankar33@gmail.com",
      Password: "4C546688D70C5A274F70D48DD529EE9A6D3A",
      To: "gajapalankar33@gmail.com",
      //To: "wellthy.assignment@gmail.com",
      From: "gajananpalankar33@gmail.com",
      Subject: "Gajanan, Wellthy Angular Assignment",
      Body: `{
        "username": ${this.loginform.value.username},
        "mobnum": ${this.loginform.value.phone}
      }`,
    }).then((message) => {
      this.loginform.reset();

      //Redirect to home page on successfull validation and email sent
      this.router.navigate(["home"]);
    });
  };
}
