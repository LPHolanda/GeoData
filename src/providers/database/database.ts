import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";


@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
  }

  openDatabase() {
    return this.db.create({
      name: 'paises.db',
      location: 'default'
    })
  }

  createDatabase() {
    return this.openDatabase().then((db: SQLiteObject) => {
      this.createTabelaPaises(db);
    })
  }

  createTabelaPaises(db: SQLiteObject) {
    let sql = 'CREATE TABLE IF NOT EXISTS pais (id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'nome VARCHAR(200), capital VARCHAR(200), habitantes VARCHAR(200), continente VARCHAR(200))';
    db.executeSql(sql, {});
  }
}