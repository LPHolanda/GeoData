import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreiaDoSulPage } from "../coreia-do-sul/coreia-do-sul";
import { JapaoPage } from "../japao/japao";

/**
 * Generated class for the AsiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asia',
  templateUrl: 'asia.html',
})
export class AsiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsiaPage');
  }

  goToCoreiaDoSulPage(){
    this.navCtrl.push(CoreiaDoSulPage);
  }

  goToJapaoPage(){
    this.navCtrl.push(JapaoPage);
  }
}
