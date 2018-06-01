import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Continente } from "../../model/continentes";
import { Pais } from "../../model/pais";
import { DestinoPage } from "../destino/destino";

/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
})
export class PaisPage {

  public continente: Continente;
  public paises: Pais[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.continente = this.navParams.get("continenteSelecionado");

    if(navParams.get('continenteSelecionado') == 'África'){
      var p1 = {nome: 'Camarões', capital: 'Iaundé', habitantes: 23};
      var p2 = {nome: 'Costa do Marfim', capital: 'Yamoussoukro', habitantes: 23};
    }
    if(navParams.get('continenteSelecionado') == 'América'){
      var p1 = {nome: 'Brasil', capital: 'Brasília', habitantes: 207};
      var p2 = {nome: 'Argentina', capital: 'Buenos Aires', habitantes: 43}; 
    } 
    if(navParams.get('continenteSelecionado') == 'Ásia'){
      var p1 = {nome: 'Japão', capital: 'Tóquio', habitantes: 127}; 
      var p2 = {nome: 'Coreia do Sul', capital: 'Seul', habitantes: 51};
    }
    if(navParams.get('continenteSelecionado') == 'Europa'){
      var p1 = {nome: 'Alemanha', capital: 'Berlim', habitantes: 82};
      var p2 = {nome: 'Itália', capital: 'Roma', habitantes: 60};
    }
    if(navParams.get('continenteSelecionado') == 'Oceania'){
      var p1 = {nome: 'Australia', capital: 'Camberra', habitantes: 24};
      var p2 = {nome: 'Nova Zelândia', capital: 'Wellington', habitantes: 4}
    }
    
    this.paises = [p1, p2];
  }

  irParaDestino(pais: Pais): void{
    this.navCtrl.push(DestinoPage, {paisSelecionado: pais});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }

}
