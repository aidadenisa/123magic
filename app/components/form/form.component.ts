import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Form} from "../../models/form";
import {RestService} from "../../services/rest.service";
@Component({
    selector: 'single-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})

export class FormComponent {

    private form:Form = null;

    constructor(private rest: RestService, private activatedRoute:ActivatedRoute){    }

    ngOnInit() {
        // this.activatedRoute.d
        this.rest.getForm(this.activatedRoute.snapshot.params['id'])
            .subscribe(
                data => {

                    this.form = data.data;

                },
                error => {
                    console.log(error);
                },
                () => {
                    console.log(JSON.stringify(this.form));
                }
            );

    }

}