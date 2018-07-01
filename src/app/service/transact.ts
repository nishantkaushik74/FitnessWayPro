declare var require: any
import { OnInit, Injectable } from '@angular/core';
//import * as frpm 'sqlite3';
@Injectable()
export class DB implements OnInit {

    //sqlite3: any;
    ngOnInit() {
        debugger;
    }





    //debugger;


    ValidateUser(email, password) {
        debugger;
      //  let db = new Sqlite.Database('../../../database/fitnessway.sqlite3');
        //let userId: any;
        //var sqlite3 = require('sqlite3').verbose();
        //var db = new sqlite3.Database('../../../database/fitnessway.sqlite3');
        //db.serialize(function () {
        //    db.each("SELECT id AS id FROM user where email='" + email + "' and password='" + password + "'", function (err, row) {
        //        userId = row.id;// console.log(row.id + ": " + row.info);
        //    });
        //    db.close();
        //});
    }

    InsertUser() {
        debugger;

        //var sqlite3 = require('sqlite3').verbose();
        //var db = new sqlite3.Database('../../../database/fitnessway.sqlite3');
        //debugger;
        //// var db = new sqlite3.Database('../../../database/fitnessway.sqlite3');

        //let stmt: any = db.prepare("INSERT INTO user VALUES('nishant@nishant.com','12121212','123456',1,1,'',1,'',1,0)");
        //stmt.finalize();
        ////db.each("SELECT * FROM memos", (err, row) => {
        ////    console.log(row.text);
        ////});

        //db.close();
    }



}
