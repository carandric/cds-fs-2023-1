import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';
import { User } from 'src/app/domain/models/user';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo debe contener por lo menos 1 mayuscula y una minuscula' }
    ]
  }

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private httpClient:HttpClient,
              private _userUseCase: Userusecase) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ],
    })
  }

  public get campos() {
    return this.registerForm.controls
  }

  register(){

    if (this.registerForm.valid) {

      let name = this.registerForm.controls['name'].value;
      let email = this.registerForm.controls['email'].value;
      let password = this.registerForm.controls['password'].value;
      let confirmPassword = this.registerForm.controls['confirmPassword'].value;
      let address = 'Default' //this.registerForm.controls['address'].value;
      let phone = '33000' //this.registerForm.controls['phone'].value;

      let user = new User();
      user.name = name;
      user.phone = phone;
      user.address = address;
      user.email = email;
      user.password = password;

      let token = localStorage.getItem("token");
      let headers;

      if (token) {
        headers = new HttpHeaders()
          .set("Contect-Type", "application/json")
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${token}`)
      }

      const options = {headers: headers};

      // this.httpClient.get(
      //   'http://localhost:3000/auth/', //usuario
      //   options).subscribe({
      //     next: (response: any) => {
      //       alert('Usuario registrado')
      //       this.router.navigate(["/fullscreen/login"]);
      //     },
      //     error: (error) => console.log(error),
      //     complete: () => {
      //       console.log("complete ... usuario registrado")
      //       // this.router.navigate(["/"]);
      //     }
      //   });

      this._userUseCase.signup(user).subscribe(
        {
          next: (response: any) => {
            console.log(response);
            // alert("User registered !!!" + '\n*message: ' + response.message + '\n*User: ' + JSON.stringify(response.user) );
            Swal.fire({
              title: "User " + response.user.name + " registered !!!",
              // text: '*message: ' + response.message + '\n*User: ' + JSON.stringify(response.user),
              text: 'User registered sucessfully!',
              icon: "success",
            })
            this.router.navigate(["/fullscreen/login"]);
          },
          error: (response: any) => {
            console.log(response);
            alert('*Message: ' + response.message+ '\n*Error.message: '+ response.error.message);

          },
          complete: () => {this.router.navigate(["/fullscreen/login"]);}
        }
      )

    }
    else {
      alert('Este formulario no es válido');
    }
  }

}
