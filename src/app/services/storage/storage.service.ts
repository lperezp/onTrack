import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage, private sqlite: SQLite) {}

  createDatabase() {
    this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then(db => {
        console.log(db);
      })
      .catch(error => {
        console.error(error);
      });
  }

  addData() {}

  getData() {}

  updateData() {}
}
