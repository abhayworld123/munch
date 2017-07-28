import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController , public viewCtrl:ViewController) {

  }

  closeModal(){
    this.viewCtrl.dismiss();

  }

}
