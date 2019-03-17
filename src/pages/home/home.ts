import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewClassPage } from '../new-class/new-class';
import { AddMemberPage } from '../add-member/add-member';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoAbout(){
    this.navCtrl.push(AboutPage);
  }
  gotoNewClass(){
    this.navCtrl.push(NewClassPage);
  }
  gotoAddMember(){
    this.navCtrl.push(AddMemberPage);
  }
}
