import { Router } from '@angular/router'
import { UserModel } from '../../Models/UserModel';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add', templateUrl: './clientlist.component.html'
})
export class ClientlistComponent {

    constructor(private _router: Router) {

    }
   
    Add() {
        this._router.navigate(['/manageclient']);
    }
    edit() {
        this._router.navigate(['/manageclient']);
    }
}
