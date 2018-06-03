import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../modelo/pais';
import { ToastController } from 'ionic-angular';
import { DbPaisProvider } from "../../providers/db-pais/db-pais";


@IonicPage()
@Component({
  selector: 'page-adiciona-pais',
  templateUrl: 'adiciona-pais.html',
})
export class AdicionaPaisPage {

  public pais: Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbPaisProvider: DbPaisProvider, private toastCtrl: ToastController) {
    this.pais = new Pais();
  }

  ionViewDidLoad() {
  }

  exibirToast(dados){
    let t = this.toastCtrl.create({
      message: dados,
      duration: 300,
      position: 'top'
    });
    t.present();
  }

  cadastraPais(){
    this.dbPaisProvider.inserir(this.pais);
    this.exibirToast('Pais cadastrado com sucesso!')
    this.navCtrl.pop();
  }

}