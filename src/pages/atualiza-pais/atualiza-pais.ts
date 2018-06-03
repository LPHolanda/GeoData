import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PaisProvider } from '../../providers/pais/pais';
import { Pais } from '../../modelo/pais';
import { DbPaisProvider } from "../../providers/db-pais/db-pais";


@IonicPage()
@Component({
  selector: 'page-atualiza-pais',
  templateUrl: 'atualiza-pais.html',
  providers: [
    PaisProvider
  ]
})
export class AtualizaPaisPage {
  public pais: Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbPaisProvider: DbPaisProvider, private toastCtrl: ToastController) {
    this.pais = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  public atualizaPais() {
    this.dbPaisProvider.atualizar(this.pais).then(() => {
      this.exibirToast('Pais atualizado com sucesso!')
      this.navCtrl.pop();
    });
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

}
