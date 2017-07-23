import {Component} from "@angular/core";
import {MdButtonModule} from '@angular/material';
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {

    private user : User = { "mail" : "", "pass": ""};
    private currentUser: string = "";
    private isValid:boolean = true;

    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    public login() {
        console.log("am ajuns in login");
        this.authenticationService.login(this.user.mail,this.user.pass)
            .subscribe(
                data => {
                    this.currentUser = JSON.parse(localStorage.getItem("currentUser")); //poate o sa imi foloseasca....
                    this.router.navigateByUrl("/form-list");
                },
                error => {
                    console.log(error);
                    this.isValid=false;
                });
    }


}