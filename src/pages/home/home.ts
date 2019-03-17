import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewClassPage } from '../new-class/new-class';
import { AddMemberPage } from '../add-member/add-member';
import { SlidesPage } from '../slides/slides';
import { CustomerPage } from '../customer/customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
  gotoNewClass(){
    this.navCtrl.push(NewClassPage);
  }
  gotoAddMember(){
    this.navCtrl.push(AddMemberPage);
  }
  gotoGallery(){
    this.navCtrl.push(SlidesPage);
  }
  gotoCustomer(){
    this.navCtrl.push(CustomerPage);
  }
}
