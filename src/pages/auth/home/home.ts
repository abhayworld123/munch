import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginEmailPage } from '../login-email/login-email';
import { SignUpPage } from '../sign-up/sign-up';
import { TermsOfServicePage } from '../../terms-of-service/terms-of-service';
import { AuthProvider } from '../../../providers/auth';

import { HomePage } from '../../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html',
  selector: 'auth-home',
})

export class AuthPage {
  error: any;

  fapi:any;

  constructor(private navCtrl: NavController, private auth: AuthProvider, public http:Http) {

  }

  ngOnInit() {

    //   this.http.get('http://api.munchado.in/wapi/restaurant/overview/62793?token=312839b3cdc263cd447566859238db60').map(res => res.json()).subscribe(data => {
    //     this.fapi = data.data.children;
    //     console.log(this.fapi);

    // });

    
  }

  openSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  openLoginPage() {
    this.navCtrl.push(LoginEmailPage);
  }

  openTermsOfService() {
    this.navCtrl.push(TermsOfServicePage);
  }

  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.error = err;
    });
  }

  
}
