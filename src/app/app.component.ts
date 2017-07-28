import { foodPage } from './../pages/food/food';
import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';


import {swipeePage} from '../pages/swipee/swipee';
import { AuthPage } from '../pages/auth/home/home';
import {Storage} from '@ionic/storage';

import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';
import {ServiceClass}  from '../providers/servicee';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  errorMessage:any;
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
   rootPage: any = AuthPage;
//  rootPage = swipeePage;
  
  constructor(
     
    private platform: Platform, public storage:Storage, public dataservice: ServiceClass,  protected data: DataProvider,    protected auth: AuthProvider) {
    this.user = {
      image: ''
    };
         storage.set('already',true);


  }

  ngOnInit() {



  
    this.platform.ready().then(() => {

       this.dataservice
        .gettoken('http://api.munchado.in/api/auth/token', '')
        .subscribe(
            result => {
              result = JSON.parse(result._body); 
              this.dataservice.token = result.token; console.log(result);
              // this.token =  this.dataservice.token;
            },
            
            error => this.errorMessage = <any>error
        );  

      this.auth.getUserData().subscribe(data => {
        if (!this.isAppInitialized) {
          this.nav.setRoot(foodPage);
          this.isAppInitialized = true;
        }
        this.user = data;
        // this.data.list('pets').subscribe(data => {
        //   console.log(data);
        // });
      }, err => {
         this.nav.setRoot(AuthPage);
      });
      StatusBar.styleDefault();
    });
  }
}
