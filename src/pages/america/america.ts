import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CanadaPage } from "../canada/canada";
import { BrasilPage } from "../brasil/brasil";
import { ArgentinaPage } from "../argentina/argentina";

/**
 * Generated class for the AmericaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-america',
  templateUrl: 'america.html',
})
export class AmericaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmericaPage');
  }

  goToArgentinaPage(){
    this.navCtrl.push(ArgentinaPage);
  }

  goToBrasilPage(){
    this.navCtrl.push(BrasilPage);
  }

  goToCanadaPage(){
    this.navCtrl.push(CanadaPage);
  }
}
