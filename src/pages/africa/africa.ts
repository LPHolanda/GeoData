import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamaroesPage } from "../camaroes/camaroes";
import { CostaDoMarfimPage } from "../costa-do-marfim/costa-do-marfim";

/**
 * Generated class for the AfricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-africa',
  templateUrl: 'africa.html',
})
export class AfricaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfricaPage');
  }

  goToCamaroesPage(){
    this.navCtrl.push(CamaroesPage);
  }

  goToCostaDoMarfimPage(){
    this.navCtrl.push(CostaDoMarfimPage);
  }
}
