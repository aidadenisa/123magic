import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";

//import {routes} from "./app.router"
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from "../services/authentication.service";
import {FormListComponent} from "./form-list/form-list.component";
import {routes} from "./app.router";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FormListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MdButtonModule,
        BrowserAnimationsModule,
        routes
    ],
    providers: [AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
