import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { CustomerdetailPage } from '../customerdetail/customerdetail';


/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  allcust : any = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public data: CustomerProvider) {

        this.data.loadAll().then(result=>{this.allcust = result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  showCustomer(custId){
    this.navCtrl.push(CustomerdetailPage,{id: custId});
  }
}
