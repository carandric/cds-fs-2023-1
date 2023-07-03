import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      {type:'minlength', message:'Este campo debe contener por lo menos 8 caracteres'},
      {type:'pattern', message:'Este campo debe contener por lo menos 1 mayúscula y 1 minúscula'},
    ]
  }

  constructor(private formBuilder: FormBuilder, private router:Router) {
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
            Validators.minLength(8),
            Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
          ]
        ]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let email = this.loginForm.controls['email'].value;
      let password = this.loginForm.controls['password'].value;
      localStorage.setItem("token", email+password);
      this.router.navigate(["/"]);
    }
    else {
      alert("Este formulario NO es válido");
    }
  }

  public get campos() {
    return this.loginForm.controls;
  }

}
