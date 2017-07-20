import {Component} from "@angular/core";
import {MdButtonModule} from '@angular/material';
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {

    private user : User = { "mail" : "", "pass": ""};
    private currentUser: string = "";

    constructor(private authenticationService: AuthenticationService) {

    }

    public login() {
        console.log("am ajuns in login");
        this.authenticationService.login(this.user.mail,this.user.pass)
            .subscribe(
                data => {
                    this.currentUser = JSON.parse(localStorage.getItem("currentUser")); //poate o sa imi foloseasca....
                },
                error => {
                    console.log(error);
                });
    }
}