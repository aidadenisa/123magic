import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormListComponent} from "./form-list/form-list.component";

export const router: Routes = [
    {path: "", redirectTo:"login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "form-list", component: FormListComponent }


];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);