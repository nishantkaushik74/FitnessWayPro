import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserModel } from '../Models/UserModel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userModel: UserModel = new UserModel();
    constructor(public router: Router) {}

    ngOnInit() {}

    onLoggedin() {
        debugger;
        var userId = window['ValidateUser'](this.userModel.userEmail, this.userModel.userPassword);
        if (userId != null && parseInt(userId) > 0) {
            this.router.navigate(['/dashboard']);
            localStorage.setItem('LoggedInUser', this.userModel.userEmail);
            //localStorage.setItem('isLoggedin', 'true');
        } else {
            alert("User or password is incorrect");
        }
    }
}
