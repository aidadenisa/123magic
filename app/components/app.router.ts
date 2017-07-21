import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormListComponent} from "./form-list/form-list.component";
import {FormComponent} from "./form/form.component";

export const router: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {
        path: "form-list",
        children: [
            {path: "", component: FormListComponent},
            {path: "form/:id", component: FormComponent}
        ]
    }


];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);