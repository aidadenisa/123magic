import {Component} from "@angular/core";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
@Component({
    selector:"user-panel",
    templateUrl:"./userpanel.component.html",
    styleUrls:["./userpanel.component.css"]
})

export class UserPanelComponent {

    private user:any = {};

    constructor(private authenticationService: AuthenticationService,private router:Router) {    }

    ngOnInit() {
        this.loadInfo();
    }

    public loadInfo() {
        let currentUserToken = localStorage.getItem("currentUser");
        console.log(currentUserToken);
        this.authenticationService.getUserInfo(currentUserToken)
            .subscribe(
                data => {
                    this.user = data.data[0];
                },
                error => {
                    console.log(error);
                }
            );
    }
    public logout() {
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl("/login");
    }
}