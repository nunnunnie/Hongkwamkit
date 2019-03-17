import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
  data: any;
  constructor(public http: HttpClient) {
    //console.log('Hello CustomerProvider Provider');
    this.data = [
      {id: "1", name: "Kedsinee", tel: "0877481760", address: "26/3 Moo.2 tungnoy Nakhonpathom 73000"},
      {id: "2", name: "Kedsinee1", tel: "0877481760", address: "26/3 Moo.2 tungnoy Nakhonpathom 73000"},
      {id: "3", name: "Kedsinee2", tel: "0877481760", address: "26/3 Moo.2 tungnoy Nakhonpathom 73000"}
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i=0;i<(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i]);
      }
    }
  }
}
