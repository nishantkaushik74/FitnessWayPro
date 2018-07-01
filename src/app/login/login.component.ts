import { Component, OnInit } from '@angular/core';
import { sqlite3 } from 'sqlite3';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserModel } from '../Models/UserModel';
import { DB } from '../service/transact';
import * as jQuery from 'jquery';
import '../../../server/server.js'
declare var validateUser: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userModel: UserModel = new UserModel();
    // require: any;
    constructor(public router: Router, private __dbService: DB) { }
    sql: sqlite3;
    ngOnInit() {
        debugger;
        // this.__dbService.ValidateUser("nishant@gmail.com","Nish@193");
    }

    onLoggedin() {
        debugger;
        var vari = new validateUser("nishant@gmail.com", 'Nish@193');
        //var sqlite3 = require('sqlite3').verbose();

        // var sqlite = this.sql.verbose();
        //var db = new sqlite.Database('../../../database/fitnessway.sqlite3');

        // this._dbservice.InsertUser();
        //this.router.navigate(['/dashboard']);
        //localStorage.setItem('LoggedInUser', this.userModel.userEmail);
        //localStorage.setItem('isLoggedin', 'true');
    }
}
