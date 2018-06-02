import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pais } from "../../model/pais";
import { DestinoPage } from "../destino/destino";
import { Continente } from "../../model/continentes";
import { PaisPage } from "../pais/pais";
import { PaisProvider } from "../../providers/pais/pais";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    PaisProvider
  ]
})
export class HomePage {

  continente: any;

  constructor(public navCtrl: NavController) {
  }

  irParaPaises(){
    this.navCtrl.push(PaisPage, {"continente": this.continente})
  }

}
