import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams, Headers} from "@angular/http";


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', email);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString();

        return this.http.post('https://api.123contactform.com/v2/token', body, {headers:headers})
            .map((response: Response) => {

                // login successful if there's a jwt token in the response

                console.log(response);
                var body = response.json();
                console.log(body);
                if (body.response){
                    let user = response.json();
                    if (user && user.token) {

                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));

                    }
                }
                else{
                    return body;
                }
            }
    }
    logout() {

        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        
    }
}