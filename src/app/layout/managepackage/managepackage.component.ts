import { Router } from '@angular/router'
import { UserModel } from '../../Models/UserModel';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'managepackage', templateUrl: './managepackage.component.html'
})
export class managepackageComponent {

    constructor(private _router: Router) {

    }
    back() {
        this._router.navigate(['/packagelist']);
    }
    save() {
        alert("Your data has been saved successfully");
    }
}
