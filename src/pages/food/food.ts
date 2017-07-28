import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {Storage} from '@ionic/storage';
import { NavController , NavParams } from 'ionic-angular';
import {ServiceClass}  from '../../providers/servicee';

@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class foodPage {
 
 menuoverviewdata:any;
 menudata:any;
 baseurl:any;
 restaurantreviews = [];
 populardishes = [];
 gallary = [];
 typeofplace= [];

 menusubcategories = [];
 categoryitems =[];
 itemprices = [];


  constructor(public service:ServiceClass,public storage:Storage ,public navCtrl: NavController , public navparam:NavParams,  public viewCtrl:ViewController) {
     
       
  }

  ngOnInit(){
     this.baseurl= 'http://dc8l3mwto1qll.cloudfront.net/assets/munch_images/' + "rnymn06237/thumb/";
    
     this.service.getmenuoverview(this.service.token) 
           .subscribe(menuoverview =>{ this.menuoverviewdata  = menuoverview.data,
            console.log(menuoverview.data.name ), console.log(this.baseurl + menuoverview.data.cover_image)
               
            ,this.menuoverviewdata.restaurant_reviews.forEach(element => {
                  
               this.restaurantreviews.push(element); 

             }),

             this.menuoverviewdata.most_popular.forEach(element => {
                  
               this.populardishes.push(element); 

             }),
             this.menuoverviewdata.galleries.forEach(element => {
                  
               this.gallary.push(element); 

             }),
               this.menuoverviewdata.type_of_place.forEach(element => {
                  
               this.typeofplace.push(element); 

             }); 

                      
           
            
            

             

             
          }
       );
            

      this.service.getmenuitems(this.service.token) 
           .subscribe(menuitems =>{ this.menudata = menuitems.menu,
            console.log(this.menudata),

               this.menudata.forEach(element => {
                  
                    this.menusubcategories.push(element);

            
                        this.menusubcategories.forEach(element1 => {
                            this.categoryitems.push (element1);
                        this.categoryitems.forEach(element2 =>{
                     this.itemprices.push(element2);
                   })
                                     
                   })
                 

             }) 

              
              
             
                   

             
          }
       );  

   }

}