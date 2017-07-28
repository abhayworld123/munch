import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { NavController , NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {ContactPage} from '../../pages/contact/contact';
import {TermsOfServicePage} from '../../pages/terms-of-service/terms-of-service';

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {
 resname:any;

 
  page1: any = TermsOfServicePage;
  page2: any = ContactPage;
 

  constructor(public navCtrl: NavController , public navparam:NavParams,  public viewCtrl:ViewController) {
  
    console.log(this.navparam.get("resname"));

    this.resname = this.navparam.get("resname");
    

  }

  // alertt(ind){
  //   alert(ind.name);
  // }

  closeModal(){
    this.viewCtrl.dismiss();

  }

}
