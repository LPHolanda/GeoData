import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Continente } from "../../model/continentes";
import { Pais } from "../../model/pais";
import { DestinoPage } from "../destino/destino";
import { PaisProvider } from "../../providers/pais/pais";


@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
  providers: [
    PaisProvider
  ]
})
export class PaisPage {

  public lista_paises = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private paisProvider: PaisProvider) {

  }

  irParaDestino(pais: Pais): void{
    this.navCtrl.push(DestinoPage, {paisSelecionado: pais});
  }

  ionViewDidLoad() {
    this.paisProvider.getPaisesByContinente(this.navParams.get('continente')).subscribe(
      data => {
        const result = data as any;
        this.lista_paises = JSON.parse(result._body);
      }, error => {
        console.log(error);
      }
    )
  }

}
