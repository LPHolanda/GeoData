import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from "../database/database";
import { SQLiteObject } from "@ionic-native/sqlite";
import { Pais } from "../../modelo/pais";


@Injectable()
export class DbPaisProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello DbPaisProvider Provider');
  }

  public inserir(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'INSERT INTO pais(nome, capital, regiao, continente) VALUES (?,?,?,?)';
      let parametros = [pais.nome, pais.capital, pais.habitantes, pais.continente];
      return db.executeSql(sql, parametros)
        .catch((e) => {
          console.log(e);
        })
    }).catch((e) => {
      console.log(e);
    })
  }

  public listar() {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'SELECT * FROM pais';
      return db.executeSql(sql, []).then((data: any) => {
        if (data.rows.lenght > 0) {
          let paises: Pais[] = [];
          for (let i = 0; i < data.rows.lenght; i++) {
            paises.push(data.rows.item(i));
          }
          return paises;
        } else {
          return [];
        }
      }).catch((e) => {
        console.log(e);
      })
    }).catch((e) => {
      console.log(e);
    })
  }

  public apagar(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'DELETE FROM pais WHERE id = ?';
      let param = [pais.id];
      return db.executeSql(sql, param);
    })
  }

  public atualizar(pais: Pais) {
    return this.dbProvider.openDatabase().then((db: SQLiteObject) => {
      let sql = 'UPDATE pais SET nome = ?, capital = ?, regiao = ?, continente = ? WHERE id = ?';
      let param = [pais.nome, pais.capital, pais.habitantes, pais.continente, pais.id]
      db.executeSql(sql, param);
    }).catch((e) => {
      console.log(e);
    }).catch((e) => {
      console.log(e);
    })
  }

}
