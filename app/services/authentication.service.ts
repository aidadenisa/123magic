import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        console.log("am ajuns in serviciu");
        console.log("https://api.123contactform.com/v2/token?email=" + email + "&password=" + password, {}, {headers:headers});
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        return this.http.post("https://api.123contactform.com/v2/token?email=" + email + "&password=" + password, {}, {headers:headers})
            .map((response: Response) => {

                console.log(response);
                let body = response.json();
                if(response.status === 200) {

                    localStorage.setItem("currentUser",JSON.stringify(body.token));
                }
                else
                    return body;
                }

            );

    }
    logout() {
        localStorage.removeItem("currentUser");
    }
}