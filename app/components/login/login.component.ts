import {Component} from "@angular/core";
import {MdButtonModule} from '@angular/material';
import {User} from "../../models/user";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {

    private user : User;
}