import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import {foodPage} from '../pages/food/food';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {ContactPage} from '../pages/contact/contact';
import {LocationsPage} from '../pages/locations/locations';
import {addtocardPage} from '../pages/addtocard/addtocard';
import {swipeePage} from '../pages/swipee/swipee';
import {GallaryPage } from '../pages/gallary/gallary';
import {GallarydetailsPage} from '../pages/gallarydetails/gallarydetails';
import {CartPage , Profile} from '../pages/cartpage/cartpage';

import { SuperTabsModule } from 'ionic2-super-tabs';
// Providers
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';
import {Storage} from "@ionic/storage";
import {ServiceClass}  from '../providers/servicee';
//Pipes
import {CapitalizePipe} from '../pipes/cap.pipe';
import {MyFilterPipe} from '../pipes/json.pipe';


export const firebaseConfig = {
   apiKey: "AIzaSyCQDWTn2ZS2TDvSLDRyMMEpuFo4PxIraQQ",
    authDomain: "munchado-822b0.firebaseapp.com",
    databaseURL: "https://munchado-822b0.firebaseio.com",
    projectId: "munchado-822b0",
    storageBucket: "munchado-822b0.appspot.com",
    messagingSenderId: "941724540240"
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,MyFilterPipe,
    LoginEmailPage,CapitalizePipe,foodPage,
    SignUpPage,CartPage,Profile,
    HomePage,addtocardPage,GallaryPage,GallarydetailsPage,
    TermsOfServicePage,ContactPage,LocationsPage,swipeePage,GallarydetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(firebaseConfig),HttpModule,
     SuperTabsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,LocationsPage,
    LoginEmailPage,addtocardPage,GallarydetailsPage,
    SignUpPage,GallaryPage,foodPage,
    HomePage,CartPage,Profile,
    TermsOfServicePage,ContactPage,swipeePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, ,ServiceClass, AuthProvider ,Storage ]
})
export class AppModule {
 

}
