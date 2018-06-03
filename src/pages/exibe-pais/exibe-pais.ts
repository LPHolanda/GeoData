import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AtualizaPaisPage } from '../atualiza-pais/atualiza-pais';
import { DbPaisProvider } from "../../providers/db-pais/db-pais";
import { Pais } from "../../modelo/pais";


@IonicPage()
@Component({
  selector: 'page-exibe-pais',
  templateUrl: 'exibe-pais.html',
})
export class ExibePaisPage {
  public paises: Pais[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbPaisProvider: DbPaisProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() { 
    this.dbPaisProvider.listar().then((pais: Pais[]) => {
      this.paises = pais;
    })
  }

  apagarPais(pais: Pais) {
    this.dbPaisProvider.apagar(pais);
    this.exibirToast('Pais apagado com sucesso!');
    this.dbPaisProvider.listar().then((pais: Pais[]) => {
      this.paises = pais;
    })
  }

  atualizaPais(pais: Pais) {
    this.navCtrl.push(AtualizaPaisPage, pais);
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 300,
      position: 'top'
    });
    t.present();
  }
}
