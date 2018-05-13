import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmericaPage } from "../america/america";
import { AfricaPage } from "../africa/africa";
import { AsiaPage } from "../asia/asia";
import { EuropaPage } from "../europa/europa";
import { OceaniaPage } from "../oceania/oceania";

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToAfricaPage(){
    this.navCtrl.push(AfricaPage);
  } 

  goToAmericaPage(){
    this.navCtrl.push(AmericaPage);
  }

  goToAsiaPage(){
    this.navCtrl.push(AsiaPage);
  }

  goToEuropaPage(){
    this.navCtrl.push(EuropaPage);
  }

  goToOceaniaPage(){
    this.navCtrl.push(OceaniaPage);
  }
}
