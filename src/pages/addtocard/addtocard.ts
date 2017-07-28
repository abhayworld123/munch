import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {Storage} from '@ionic/storage';
import { NavController , NavParams } from 'ionic-angular';
import {ServiceClass}  from '../../providers/servicee';

@Component({
  selector: 'page-addtocard',
  templateUrl: 'addtocard.html'
})
export class addtocardPage {
 resname:any;
 dishorder:any;
 totalctr:any = 1 ;
 quant:any;
 baseurl:any;
 addonapi:any;
 cartarray:Array<any> = [];
 
 
  constructor(public service:ServiceClass,public storage:Storage ,public navCtrl: NavController , public navparam:NavParams,  public viewCtrl:ViewController) {
  
            this.baseurl= 'http://dc8l3mwto1qll.cloudfront.net/assets/munch_images/' + "rnymn06237/thumb/";

    console.log(this.navparam.get("dish"));

    this.resname = this.navparam.get("resname");
    this.dishorder = this.navparam.get("dish");
    
    this.quant = 0;  
    // this.cartarray.push(34,54,65 ,'dsdsds');  
     
  }

  // alertt(ind){
  //   alert(ind.name);
  // }


  ngOnInit(){
     this.service.getaddons()
           .subscribe(menuaddons =>{ this.addonapi = menuaddons,
             console.log(this.addonapi[0]);
               

            
            //  this.storage.set('menuitems',menuitems.menu)

             

             
          }
       );
  }
  
  Addtoorder(totalctr){
     this.navCtrl.popTo({ctr:totalctr});

    //  this.navCtrl.setRoot(HomePage , {ctr: totalctr});
  }

  addquantity(dish){
   
    this.totalctr += 1; 
    this.updatestorage(this.totalctr);
    this.service.globalCartitems.push(dish);

    console.log(this.service.globalCartitems);
  }

   updatestorage(store){
       this.service.globalVar = this.service.globalVar +  store;
    
   
      // this.storage.set('cartcount',store);
    }

  removequantity(){
     this.totalctr -= 1;

     this.updatestorage(this.totalctr);
  }

  
   
  closeModal = () =>  { this.viewCtrl.dismiss(); };


}
