import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.sevice';
@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    public loginForm!: FormGroup;
    constructor(private fb: FormBuilder,private authService:AuthService){
        // this.myForm();
    }


    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('',[Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        });
        localStorage.clear()
    }
    
    // myForm() {
    //     this.loginForm = this.fb.group({
    //     email: ['', [ Validators.required,Validators.email] ],
    //     password: ['', Validators.required ,Validators.minLength(4)],
    //     });
    //  }
    onSubmit() {
        console.log("INCIDE SUBMIT")
        this.authService.login(
        this.loginForm.get('email')!.value,
        this.loginForm.get('password')!.value
        );
      }
}