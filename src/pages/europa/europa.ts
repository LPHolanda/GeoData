import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlemanhaPage } from "../alemanha/alemanha";
import { ItaliaPage } from "../italia/italia";

/**
 * Generated class for the EuropaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-europa',
  templateUrl: 'europa.html',
})
export class EuropaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EuropaPage');
  }

  goToAlemanhaPage(){
    this.navCtrl.push(AlemanhaPage);
  }

  goToItaliaPage(){
    this.navCtrl.push(ItaliaPage);
  }
}
