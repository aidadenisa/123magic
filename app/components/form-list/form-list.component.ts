import {Component} from "@angular/core";
import {RestService} from "../../services/rest.service";
import {Form} from "../../models/form";
import {MdSnackBar} from "@angular/material";
@Component({
    selector: 'form-list',
    templateUrl: 'form-list.component.html',
    styleUrls: ['form-list.component.css']
})


export class FormListComponent {

    private formList: Form[] = [];
    private options: any = {};

    constructor (private rest:RestService ) {   }

    ngOnInit() {
        this.loadForms();

    }

    public loadForms() {
        this.rest.getFormList().subscribe(
            data => {
                this.formList = data.data;
            },
            error => {
                    console.log(error);
            },
            () => {
                console.log(JSON.stringify(this.formList) + "     eu i-am zis sa faca asta");

                for(let form of this.formList) {
                    this.options[form.id] = false;
                }

            }
        );

    }

    public deleteForms() {
        let arrayOfOptions:any[] = [];
        for(let form in this.options) {
            if(this.options[form])
                arrayOfOptions.push(form);
        }

        this.rest.deleteForms(arrayOfOptions).subscribe(
            data => {
                // let deleteResponse = data;
                this.loadForms();
            },
            error => {
                let deleteResponse = error;
            }

        );
    }



}