import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // loginForm : FormGroup | undefined;
  loginForm! : FormGroup;

  public validationMessages = {
    email: [
      {type:'required', message:'Este campo es requerido'},
      {type:'email', message:'Este campo es de tipo email'},
    ],
    password: [
      {type:'required', message:'Este campo es requerido'},
      {type:'minlength', message:'Este campo debe contener por lo menos 6 caracteres'},
      {type:'pattern', message:'Este campo debe contener por lo menos 1 mayúscula y 1 minúscula'},
    ]
  }

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private httpClient:HttpClient,
              private _userUseCase: Userusecase) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:
        [
          "",
          [
            Validators.required,
            Validators.email
          ]
        ],
      password:
        [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            // Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
          ]
        ]
    })
  }

  login() {

    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    //OJO: cambiar la URL por la del proyecto moreuse... localhosto...
    // this.httpClient.get("https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d").
    // subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    //   complete: () => console.log("complete")
    // });

    // this.httpClient.post(
    //   // "https://run.mocky.io/v3/1758a518-3a80-45c9-bf46-13c22f40370d", //Ejemplo del message
    //   "https://run.mocky.io/v3/33410e3b-4850-4fcb-ac76-3a48aa458a97", //Ejemplo del token
    //   {
    //     email:email,
    //     password:password
    //   }).subscribe({
    //     next: (response: any) => {
    //       // console.log(response)
    //       // localStorage.setItem("message", response.message);
    //       console.log(this.loginForm.valid);
    //       if (this.loginForm.valid) {
    //         // localStorage.setItem("token", email+password);
    //         localStorage.setItem("token", response.token);
    //       }
    //       else {
    //         alert("Este formulario NO es válido");
    //       }
    //     },
    //     error: (error) => console.log(error),
    //     complete: () => {
    //       console.log("complete")
    //       this.router.navigate(["/"]);
    //     }
    //   });

    if (this.loginForm.valid) {

      this._userUseCase.login(email, password).subscribe(
        {
          next: (response: any) => {
            if (response.token != '') {
              localStorage.setItem("token", response.token);
              this.router.navigate(["/"]);
            } else {
              alert("Verifique sus credenciales e intente nuevamente");
            }
          },
          error: (response: any) => {
            console.log(response);
            alert('*Message: ' + response.message+ '\n*Error.message: '+ response.error.message);
          },
          complete: () => {this.router.navigate(["/"]);}
        }
      )
    }
    else {
      alert("Este formulario NO es válido");
    }
  }

  public get campos() {
    return this.loginForm.controls;
  }

}
