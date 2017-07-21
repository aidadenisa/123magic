import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";


@Injectable()
export class RestService {

    constructor(private http:Http) {    }

    public getFormList() {

        let currentUser = localStorage.getItem("currentUser");

        return this.http.get("https://api.123contactform.com/v2/forms?JWT=" + currentUser)
            .map((res:Response) =>
                {
                    let body = res.json();
                    console.log(body);
                    if(body.statusCode === 200) {
                        return(body.data);
                    }
                    else return body;
                }
            );
    }

    public getForm(formId:number) {

        let currentUser = localStorage.getItem("currentUser");

        return this.http.get("https://api.123contactform.com/v2/forms/" + formId + "?JWT=" + currentUser)
            .map((res : Response) => {
                let body = res.json();
                if(body.statusCode === 200) {
                    return(body.data);
                }
                else return body;

            });




    }

}