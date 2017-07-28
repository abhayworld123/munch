import { Component , ViewChild , } from '@angular/core';
import {Http} from '@angular/http';
import { ViewController ,Slides ,} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

import { NavController , NavParams } from 'ionic-angular';


@Component({
  selector: 'page-swipee',
  templateUrl: 'swipee.html'
})
                    
 
export class swipeePage {
 @ViewChild('pageSlider') pageSlider: Slides;
 tabs: any = '0';
 fapi2:any;
 
  constructor(public navCtrl: NavController ,public http:Http, public navparam:NavParams,  public viewCtrl:ViewController) {
  
              
  
    
     
  }

  ngOnInit(){
      this.http.get('http://api.munchado.in/wapi/restaurant/menu/59139?token=312839b3cdc263cd447566859238db60')
      .map(res=> res.json()).subscribe(data2 =>{
      this.fapi2 = data2.menu[0].sub_categories[0].category_items;
      console.log(this.fapi2);
      })
      
  }

  changeWillSlide($event) {
 this.tabs = $event._snapIndex.toString();
}
  
   selectTab(index) {
this.pageSlider.slideTo(index);
 }

  // alertt(ind){
  //   alert(ind.name);
  // }
  
 

}
