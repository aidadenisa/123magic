import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from "../services/authentication.service";
import {FormListComponent} from "./form-list/form-list.component";
import {routes} from "./app.router";
import {RestService} from "../services/rest.service";
import {FormComponent} from "./form/form.component";
import {MdListModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdSnackBarModule} from '@angular/material';
import 'jquery/dist/jquery.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {UserPanelComponent} from "./userpanel/userpanel.component";
import {MdChipsModule} from '@angular/material';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FormListComponent,
        FormComponent,
        UserPanelComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MdButtonModule,
        MdListModule,
        BrowserAnimationsModule,
        MdProgressSpinnerModule,
        MdCardModule,
        MdSnackBarModule,
        MdChipsModule,
        routes
    ],
    providers: [AuthenticationService, RestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
