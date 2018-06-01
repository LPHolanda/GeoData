import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pais } from "../../model/pais";
import { DestinoPage } from "../destino/destino";
import { Continente } from "../../model/continentes";
import { PaisPage } from "../pais/pais";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public continentes: Continente[];

  constructor(public navCtrl: NavController) {

    var c1 = {nome: 'África'};
    var c2 = {nome: 'América'};
    var c3 = {nome: 'Ásia'};
    var c4 = {nome: 'Europa'};
    var c5 = {nome: 'Oceania'};

    this.continentes = [c1, c2, c3, c4, c5];
  }

  irParaPaises(continente: Continente): void{
    this.navCtrl.push(PaisPage, {continenteSelecionado: continente});
  }

}
