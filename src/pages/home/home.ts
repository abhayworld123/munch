import { Component,NgZone } from '@angular/core';
import { NavController ,NavParams ,Slides,Content, } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 import {Observable} from 'rxjs/Observable';
import { ViewChild } from '@angular/core';  
// import { Storage } from 'ionic-framework/ionic';
import {Storage} from '@ionic/storage';
import {ContactPage} from '../../pages/contact/contact';
import {LocationsPage} from '../../pages/locations/locations';
import {addtocardPage} from '../../pages/addtocard/addtocard';
import {GallaryPage} from '../../pages/gallary/gallary';
import {CartPage} from '../../pages/cartpage/cartpage';


import {AuthProvider } from '../../providers/auth';



// import { NativeStorage } from '@ionic-native/native-storage';

import {CapitalizePipe}  from '../../pipes/cap.pipe';
import {MyFilterPipe} from '../../pipes/json.pipe';
import {ServiceClass}  from '../../providers/servicee';
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html',
  selector: 'home',
})
export class HomePage {
  @ViewChild(Content) content: Content;
  @ViewChild('pageSlider') pageSlider: Slides;
  @ViewChild(addtocardPage) addtocartdet: addtocardPage;


  items:any;

    name = 'john doe';
  tabs: any = '0';
  fapi :any;
  fapi2: any;
  fapi3:any;  
  restjson :any;
  cartcount:any ;  
  recievedctr:any=0;
  errorMessage:any; 

  baseurl:any;
  private rootPage;
  private contactpage;
  public already;
  private locationspage;
  private gallarypage;
  public scrollAmount = 0; 
  public token :any;
  constructor( public auth:AuthProvider, public zone: NgZone, public dataservice: ServiceClass ,private nav: NavController,public storage: Storage  ,public navparam: NavParams,public http:Http,public modalCtrl: ModalController) {
    // this.rootPage = HomePage;
                this.cartcount =  this.dataservice.globalVar; 

    // alert(this.content.contentHeight);
     
    // this.cartcount =  this.dataservice.cartcount;
     this.contactpage = ContactPage;
     this.gallarypage = GallaryPage;
     this.locationspage = LocationsPage;
    //  this.already =  true;
     this.recievedctr =  this.navparam.get("ctr");
    //  this.cartcount = this.cartcount +  this.recievedctr;
            //  storage.set('cartcount',this.cartcount);
    //  storage.set('already',true);
     
    //   storage.get('already').then((val) => {
    // console.log('visited', val);
    // this.already = val;
    //  });

    


       storage.get('cartcount').then((val) => {
        console.log('Your age is', val);
        // this.cartcount = val;
        // this.cartcount = this.cartcount ;
        });
     
        
    
  }



  

    presentModal( category,subcategory,dishorder) {
    let xorder:any;
    console.log(category +  "category " + subcategory + "subcategory" + dishorder + "dishorder" );
    if (dishorder > 40){
    xorder = this.fapi3[category].category_items[subcategory];
     
     
   }
    else {
     xorder = this.fapi3[category].sub_categories[subcategory].category_items[dishorder];
           

    }



    console.log( xorder);

    

     if (this.already){
     
        let modal = this.modalCtrl.create(LocationsPage,{"resname": this.restjson });
        modal.present();
        this.storage.set('already',false);
      
     }

    else{
       let modal = this.modalCtrl.create(addtocardPage,{"resname": this.restjson,"dish":xorder});
        modal.present();
        // this.already= true;
        }

   }
    

   


  //  updatestorage(store){
  //     this.storage.set('cartcount',store);
  //  }
    
    ngOnInit() {

 
    


       //this.dataservice.globalVarUpdate().subscribe(data = >)
     
       
      //  this.storage.set('cartcount','10');

       this.dataservice.getmenuitems(this.dataservice.token) 
           .subscribe(menuitems =>{ this.fapi2 = menuitems.menu[0].sub_categories[0].category_items,
            console.log(this.fapi2),this.fapi3 = menuitems.menu,
               

            
             this.storage.set('menuitems',menuitems.menu)

             

             
          }
       );

       
            
           
           
             
           
        
          
    
    
           this.baseurl= 'http://dc8l3mwto1qll.cloudfront.net/assets/munch_images/' + "rnymn06237/thumb/";
       console.log(this.fapi3);

  

    //    this.http.get('assets/restjson.json').map(res=> res.json()).subscribe(data3 =>{
    //    this.restjson = data3;
    //     console.log(data3);
    // })

    //  this.http.get('assets/restjson.json')//, options)
    // .map((resp) => {
    //     console.log("mock data" + resp.json());
    //     // return response.json();
    // })


    this.http.get('assets/restjson.json').map(res=> res.json()).subscribe(data3 =>{
      
      this.restjson = data3;
    }) 



  

    }
    openPage(p) {
      this.nav.push(p);
      
    }

    logout(){
       this.auth.logout();
    }

   openCheckout = ()=> { this.nav.push(CartPage) } 


      changeWillSlide($event) {
 this.tabs = $event._snapIndex.toString();
}
  
   selectTab(index) {
   
   this.pageSlider.slideTo(index);
 }
    // getorderdetail(){
    //    return this.http.get('http://api.munchado.in/wapi/restaurant/details/'+59139+'?token=312839b3cdc263cd447566859238db60').map(res=> res.json()).subscribe(data3 =>{
      
    //   // this. = data3;
    // }
  


  // getrestrauntjson(){
   
  //   return this.http.get('assets/ordersummary.json')//, options)
  //   .map((response: Response) => {
  //       console.log("mock data" + response.json());
  //       return response.json();
  //   }
  //   )
  //   .catch(this.handleError);
  // }
  
 getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    
    console.log(ev);
    this.items = this.fapi3;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.category_name.toLowerCase().indexOf(val.toLowerCase()) > -1);  
       })
      }
    }

   
   scrollHandler(event) {
   console.log(`ScrollEvent: ${event}`)
   this.zone.run(()=>{
     // since scrollAmount is data-binded,
     // the update needs to happen in zone
     this.scrollAmount++;
     console.log( 'scrooll' + this.scrollAmount);
   })
  }

} 
