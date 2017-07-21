import {Component} from "@angular/core";
import {RestService} from "../../services/rest.service";
import {Form} from "../../models/form";
@Component({
    selector: 'form-list',
    templateUrl: 'form-list.component.html',
    styleUrls: ['form-list.component.css']
})

export class FormListComponent {

    private formList: Form[] = [];

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
            }
        );

    }

}