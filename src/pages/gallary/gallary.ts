import { Component } from '@angular/core';
import {Http } from '@angular/http';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GallarydetailsPage } from '../../pages/gallarydetails/gallarydetails';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gallary',
  templateUrl: 'gallary.html'
})
export class GallaryPage {

  gallary:any;
  baseuri:any;

  constructor(public navCtrl: NavController , public http:Http, public viewCtrl:ViewController, public modalCtrl: ModalController) {
    
  }
 
    ngOnInit(){

         this.http.get('http://api.munchado.in/wapi/restaurant/gallery/62793?token=e553cd7d793b2b4f38e49762b9700fec').map(res=> res.json()).subscribe(data2 =>{
         this.gallary = data2.restaurant_images.images;
         this.baseuri = data2.restaurant_images.base_url+"rnymn06237/thumb/";
         console.log(data2.restaurant_images);

        }) 
      
    }

    openslidegal(ind){
        
        let modal = this.modalCtrl.create(GallarydetailsPage,{"resname": {"index": ind ,"gallary":this.gallary,"base":this.baseuri }});
         modal.present();
 

    }
 

}
