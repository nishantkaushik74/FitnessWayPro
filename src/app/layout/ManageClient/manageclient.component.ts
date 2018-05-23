import { Router } from '@angular/router'
import { UserModel } from '../../Models/UserModel';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manage', templateUrl: './manageclient.component.html'
})
export class manageclientComponent {

    constructor(private _router: Router) {

    }
    back() {
        this._router.navigate(['/clientlist']);
    }
    save() {
        alert("Your data has been saved successfully");
    }
}
