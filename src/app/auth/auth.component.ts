import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authRespose";
import { Observable } from "rxjs";

@Component({
    selector: "discogs-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {

    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>

    constructor(private auth:AuthService){}

    public onSubmit(data: NgForm){
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);
        if(this.buttonClicked == 'SignUp'){
            this.authObservable = this.auth.signup(data.value.email, data.value.password);
        }else if(this.buttonClicked == 'Login'){
            this.authObservable = this.auth.login(data.value.email, data.value.password);
        }

        this.authObservable.subscribe((data:AuthResponse) => {
            console.log(data);
        },
        error =>{
            console.log(error.error.error.message);
            alert("Something went wrong. Error code: " + error.error.error.message);
        });

        data.resetForm();
    }
}