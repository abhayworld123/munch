import {Injectable} from "@angular/core";
import { Http,Headers,RequestOptions,Response} from '@angular/http';
import {Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import {Observer } from 'rxjs/Observer';
// import * as constants from '../app/app.settings';
import 'rxjs/add/operator/catch';
@Injectable()


export class ServiceClass{

globalVar:any = 0;
globalCartitems:Array<any> = [];
options:any;

  globalVarUpdate:Observable<number>;
  globalVarObserver:Observer<number>;

public token:any;
public token2:any;
public extractdata:any;
public cartcount:number = 0 ;
    // private _producturl= constants.API_URL + 'userlist'; 
    constructor(private _http: Http){

        // this.token='312839b3cdc263cd447566859238db60'; 

        this.token2 ='e553cd7d793b2b4f38e49762b9700fec';

        this.globalVarUpdate = Observable.create((observer:Observer<number>) => {
        this.globalVarObserver.next(this.globalVar);
   
    });
    
    } 
//     getproducts(): Observable<any> {
//       return this._http.get(this._producturl,{ withCredentials: false }) 
//       .map((response: Response) => <any> response.json());
//    }
  
    
        

     gettoken(url: string, param: any): Observable<any> {
       console.log(url);
    let body = JSON.stringify(param);
    return this._http
        .post(url, body, this.options)
        .catch(this.handleError);
    } 

     private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

   

     getmenuitems(token): Observable<any>{ 
     
      
       console.log();
               return this._http.get('http://api.munchado.in/wapi/restaurant/menu/59139?token='+ token) 
      .map((response: Response) => <any> response.json()) 
      .do(data => console.log(data.menu)).do(ab=>  45);

      
      
      
       
    }


    
     getmenuoverview(token): Observable<any>{ 
     
      
       console.log();
               return this._http.get('http://api.munchado.in/api/restaurant/overview/58285?mob=true&token='+ token) 
      .map((response: Response) => <any> response.json()) 
      .do(data => console.log(data.menu)).do(ab=>  45);

      
      
      
       
    }


    getaddons(): Observable<any>{

      return this._http.get('http://api.munchado.in/wapi/restaurant/menu-addons/15713197?token='+this.token2)
      .map((response:Response) => <any> response.json())
      .do(data => console.log(data));
    }


    
    updateGlobalVar(newValue:any) {
      this.globalVar = newValue;
      this.globalVarObserver.next(this.globalVar);
    }
    
    

}

   
