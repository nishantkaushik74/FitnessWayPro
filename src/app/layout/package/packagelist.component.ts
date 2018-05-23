import { Router } from '@angular/router'
import { UserModel } from '../../Models/UserModel';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'package', templateUrl: './packagelist.component.html'
})
export class packagelistComponent {

    constructor(private _router: Router) {

    }

    save() {
        alert("Your data has been saved successfully");
    }
   back() {
        this._router.navigate(['/dashboard']);
    }
    edit() {
        this._router.navigate(['/managepackage']);
    }
    Add() {
        this._router.navigate(['/managepackage']);
    }
}
