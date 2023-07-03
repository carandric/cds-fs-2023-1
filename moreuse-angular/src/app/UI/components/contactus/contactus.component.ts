import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit{

  contactusForm!: FormGroup;

  public validationMessages = {
    name: [
      {type: 'required', message: "Este campo es requerido"}
    ],
    email: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'email', message: 'Este campo debe tener un email válido'}
    ],
    message: [
      {type: "required", message:"Este campo es requerido"},
      {type: "pattern", message:"Este campo no debe ser solo espacios en blanco"}
    ]
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.contactusForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: [
        "",
        [
          Validators.required,
          Validators.pattern(/[\S]/g)
        ]
      ]
    });
  }

  public get campos(){
    return this.contactusForm.controls;
  }

  enviar() {
    if (this.contactusForm.valid) {
      alert("Mensaje enviado con éxito!!!");
      this.router.navigate(["/"]);
    } else {
      alert("Este formulario no es válido");
    }
  }

}
