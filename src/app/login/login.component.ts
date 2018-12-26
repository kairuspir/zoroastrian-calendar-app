import { Component, OnInit } from '@angular/core';
import { prompt } from "ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { AuthService } from '~/app/services';
import * as Toast from 'nativescript-toasts';
import { User } from '~/app/models';
import { FirebaseService } from '~/app/services';

@Component({
    moduleId: module.id,
    selector: 'ns-app-auth-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;


    constructor(
        private routerExtensions: RouterExtensions,
        private authService: AuthService,
        private firebaseService: FirebaseService
    ) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }

    submit() {
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.authService.login(this.user)
            .then(() => {
                this.isAuthenticating = false;
                this.routerExtensions.navigate(["/"], { clearHistory: true });

            }, (message: any) => {
                this.isAuthenticating = false;
                Toast.show({ text: "Failed to login", duration: Toast.DURATION.SHORT });
                console.log(JSON.stringify(message));
            });
    }

    signUp() {
        this.firebaseService.register(this.user)
            .then(() => {
                this.isAuthenticating = false;
                this.toggleDisplay();
            })
            .catch((message: any) => {
                alert(message);
                this.isAuthenticating = false;
            });
    }

    forgotPassword() {

        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Zoroastrian Calendar to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.firebaseService.resetPassword(data.text.trim())
                    .then((result: any) => {
                        if (result) {
                            alert(result);
                        }
                    });
            }
        });
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}