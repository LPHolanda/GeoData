import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from "../../model/pais";
import { PaisProvider } from "../../providers/pais/pais";

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
  providers: [
    PaisProvider
  ]
})
export class DestinoPage {

  public pais: Pais;

  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider) {
    this.pais = this.navParams.get("paisSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
